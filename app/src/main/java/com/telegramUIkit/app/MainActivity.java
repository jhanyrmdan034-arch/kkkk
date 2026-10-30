package com.telegramUIkit.app;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Single-activity host for the Telegram Android UI Kit demo.
 * The entire interface lives in assets/ (index.html, styles.css, app.js) —
 * the very same files served by the live web preview — so what you preview
 * is pixel-for-pixel what you get inside the APK.
 */
public class MainActivity extends Activity {

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Window window = getWindow();
        window.setStatusBarColor(Color.WHITE);
        window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);

        webView = new WebView(this);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setTextZoom(100);
        webView.setWebViewClient(new WebViewClient());
        setContentView(webView);

        webView.loadUrl("file:///android_asset/index.html?androidapp=1");
    }

    @Override
    public void onBackPressed() {
        if (webView != null) {
            webView.evaluateJavascript(
                "window.onAndroidBack ? window.onAndroidBack() : false",
                value -> {
                    if (!"true".equals(value)) {
                        finish();
                    }
                });
        } else {
            super.onBackPressed();
        }
    }
}
