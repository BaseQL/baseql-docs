/**
 * This module provides a simple mixpanel client for use in middleware
 * since neither official libraries seem to support the Edge runtime.
 */
import { NextRequest, userAgent } from 'next/server';

/**
 * @param {NextRequest} request 
 */
async function trackPageView(request, sessionId, userId=null) {
    await trackEventWithApi(request, 'Page View', sessionId, userId, {
        page: request.nextUrl.pathname,
    });
}

/**
 * Gets common tracking properties for a request.
 * @param {NextRequest} request 
 */
function getEventProperties(request) {
    const { device, browser, os } = userAgent(request);
    const referrer = request.headers.get("referer");
    const ip = request.ip ?? request.headers.get("X-Forwarded-For")?.split(',')?.at(0)?.trim() ?? "";

    const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term"
    ];

    const utmValues = utmKeys.reduce((acc, key) => {
        if (request.url && request.nextUrl.searchParams.has(key)) {
            acc[key] = request.nextUrl.searchParams.get(key);
        }
        return acc;
    }, {});

    return {
        $device: device.model,
        $browser: browser.name,
        $os: os.name,
        $os_version: os.version,
        $browser_version: browser.version,
        $referrer: referrer,
        $referring_domain: referrer ? new URL(referrer).hostname : "",
        ip: ip,
        ...utmValues,
    };
}

/**
 * @param {NextRequest} request 
 */
async function trackEventWithApi(request, eventName, sessionId, userId=null, additionalProperties = {}) {
    const eventProperties = getEventProperties(request);
    const event = {
        event: eventName,
        properties: {
            token: process.env.MIXPANEL_TOKEN,
            time: new Date().getTime(),
            source: "Docs",
            $device_id: sessionId,
            ...(userId ? { $user_id: userId } : {}),
            ...eventProperties,
            ...additionalProperties,
        }
    };

    const response = await fetch(`https://api.mixpanel.com/track`, {
        method: "POST",
        headers: {
            accept: "text/plain",
            "content-type": "application/json"
        },
        body: JSON.stringify([event])
    });
    if (response.ok) {
        return await response.json();
    } else {
        console.log("Failed to track event", event);
    }
}

export {
    trackPageView,
}