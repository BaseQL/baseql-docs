import { NextRequest, NextResponse } from "next/server";

import { SESSION_COOKIE_NAME } from "../analytics/common";
import { trackPageView } from "../analytics/edge";

/**
 * @param {NextRequest} request 
 * @param {NextResponse} response 
 */
export default async function handler(request, response) {
    try {
        // Exclude external monitor requests from analytics (e.g. UptimeRobot)
        if (request.headers.get('x-external-monitor-source')) {
            return response;
        }

        const sessionId = getSessionId(request, response);
        // It would be great if we didn't block the request
        // on the analytics, but vercel seems to kill the middleware
        // after return, so we needed to add the await here.
        await trackPageView(request, sessionId);
    }
    catch (error) {
        console.log("Failed to track page view: ", error);
    }
    return response;
}

/**
 * @param {NextRequest} request 
 * @param {NextResponse} response 
 */
function getSessionId(request, response) {
    let cookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (cookie) {
        return cookie;
    }
    else {
        const sessionId = crypto.randomUUID();
        const cookieDomain = process.env.COOKIE_DOMAIN;
        if (cookieDomain) {
            response.cookies.set(SESSION_COOKIE_NAME, sessionId, { domain: cookieDomain});
        } else {
            response.cookies.set(SESSION_COOKIE_NAME, sessionId);
        }
        return sessionId;
    }
}