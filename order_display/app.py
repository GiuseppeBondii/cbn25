from flask import Flask, render_template, request, redirect

app = Flask(__name__)
orders = []
pwd = 'SucaZizza'
authToken = 0

@app.route('/check_orders')
def check_orders():
    return {'orders': orders}

@app.route('/')
def index():
    return render_template('display.html', orders=orders)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if authToken == 0:
        return redirect('/login')
    
    if request.method == 'POST':
        order_number = request.form.get('order_number')
        if 'add' in request.form and order_number:
            orders.append(order_number)
        elif 'remove' in request.form and order_number:
            try:
                orders.remove(order_number)
            except ValueError:
                pass
    return render_template('admin.html', orders=orders)

@app.route('/login', methods=['GET', 'POST'])
def login():
    global authToken
    if authToken == 1:
        return redirect('/admin')
    if request.method == 'POST':
        password = request.form.get('password')
        if password == pwd:
            authToken = 1
            return redirect('/admin')
        else:
            return "Password incorrect"
    return render_template('login.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
