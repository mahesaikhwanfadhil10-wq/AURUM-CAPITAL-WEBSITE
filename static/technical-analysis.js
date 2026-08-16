/* =====================================================
   AURUM — DYNAMIC TECHNICAL MARKET
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const marketSelect = document.getElementById(
        "technical-market"
    );

    const technicalWidget = document.getElementById(
        "technical-rating"
    );

    const symbolLabel = document.getElementById(
        "technical-symbol-label"
    );

    const marketName = document.getElementById(
        "technical-market-name"
    );

    const liveLink = document.getElementById(
        "technical-live-link"
    );

    if (
        !marketSelect ||
        !technicalWidget ||
        !symbolLabel ||
        !marketName ||
        !liveLink
    ) {
        return;
    }


    const marketNames = {
        "OANDA:XAUUSD": "GOLD / U.S. DOLLAR",
        "OANDA:EURUSD": "EURO / U.S. DOLLAR",
        "OANDA:GBPUSD": "POUND / U.S. DOLLAR",
        "OANDA:USDJPY": "U.S. DOLLAR / JAPANESE YEN",
        "BITSTAMP:BTCUSD": "BITCOIN / U.S. DOLLAR",
        "TVC:USOIL": "CRUDE OIL"
    };


    const tradingViewSymbols = {
        "OANDA:XAUUSD": "XAUUSD",
        "OANDA:EURUSD": "EURUSD",
        "OANDA:GBPUSD": "GBPUSD",
        "OANDA:USDJPY": "USDJPY",
        "BITSTAMP:BTCUSD": "BTCUSD",
        "TVC:USOIL": "USOIL"
    };


    const updateMarket = () => {

        const selectedSymbol = marketSelect.value;

        const shortSymbol =
            tradingViewSymbols[selectedSymbol] ||
            selectedSymbol.split(":").pop();

        symbolLabel.textContent = shortSymbol;

        marketName.textContent =
            marketNames[selectedSymbol] ||
            selectedSymbol;

        technicalWidget.setAttribute(
            "symbol",
            selectedSymbol
        );

        liveLink.href =
            `https://www.tradingview.com/symbols/${shortSymbol}/technicals/`;
    };


    marketSelect.addEventListener(
        "change",
        updateMarket
    );


    updateMarket();

});