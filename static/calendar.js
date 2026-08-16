document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById(
        "tradingview-economic-calendar"
    );

    if (!container) {
        return;
    }

    const widgetScript = document.createElement("script");

    widgetScript.type = "text/javascript";

    widgetScript.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-events.js";

    widgetScript.async = true;

    widgetScript.textContent = JSON.stringify({
        colorTheme: "dark",
        isTransparent: true,
        locale: "en",
        countryFilter: "",
        importanceFilter: "-1,0,1",
        width: "100%",
        height: 650
    });

    container.appendChild(widgetScript);

});