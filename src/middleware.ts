import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    // Log all cookies to check if 'token' is included
    console.log('Cookies:', req.cookies);

    const isAuthenticated = req.cookies.get('tokens');
    console.log('Token:', isAuthenticated);  // Log the token to check

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
