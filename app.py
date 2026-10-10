from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({"status": "active", "message": "Backend server working!"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)