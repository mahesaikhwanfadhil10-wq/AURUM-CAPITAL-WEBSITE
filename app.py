from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():

    tickers = [
        {
            "pair": "GBP/USD",
            "price": "1.35264",
            "change": "+0.00411 (+0.30%)",
            "up": True
        },
        {
            "pair": "USD/JPY",
            "price": "159.316",
            "change": "-0.166 (-0.10%)",
            "up": False
        },
        {
            "pair": "AUD/USD",
            "price": "0.70822",
            "change": "+0.00231 (+0.33%)",
            "up": True
        },
        {
            "pair": "USD/CAD",
            "price": "1.38724",
            "change": "-0.00574 (-0.41%)",
            "up": False
        },
        {
            "pair": "USOIL",
            "price": "82.39",
            "change": "+1.17 (+1.44%)",
            "up": True
        },
        {
            "pair": "BTC/USD",
            "price": "63,025",
            "change": "+49.00 (+0.08%)",
            "up": True
        },
        {
            "pair": "XAU/USD",
            "price": "2,376.820",
            "change": "+25.550 (+0.59%)",
            "up": True
        }
    ]

    return render_template(
        'index.html',
        tickers=tickers
    )


if __name__ == '__main__':
    app.run(debug=True)