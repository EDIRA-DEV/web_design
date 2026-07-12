import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventSourceUrl, userData } = body;

    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      return NextResponse.json({ error: 'Faltan credenciales de Meta' }, { status: 500 });
    }

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_id: eventId,
          event_source_url: eventSourceUrl,
          user_data: {
            client_ip_address: userData.ip || '127.0.0.1',
            client_user_agent: userData.userAgent || '',
            ...(userData.email && { em: userData.email }),
            ...(userData.firstName && { fn: userData.firstName }),
            ...(userData.lastName && { ln: userData.lastName }),
            ...(userData.phone && { ph: userData.phone }),
            ...(userData.country && { country: userData.country }),
          },
        },
      ],
      access_token: accessToken,
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('[CAPI] Error interno:', error);
    return NextResponse.json({ error: 'Error interno de CAPI' }, { status: 500 });
  }
}
