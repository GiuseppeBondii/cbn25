from flask import Flask, render_template, request, redirect

app = Flask(__name__)
# per aggiungere dei colori, si aggiunge qui
orders =  {
    'red': [],
    'blue': [],
    'green': []
}
# per aggiungere dei colori, si aggiunge qui
orders['red'] = [i for i in range(1, 101)]
orders['blue'] = [i for i in range(1, 101)]
orders['green'] = [i for i in range(1, 101)]
ready = {
# per aggiungere dei colori, si aggiunge qui
    'red': [],
    'blue': [1],
    'green': []
}
pwd = 'SucaZizza'
authToken = 0

@app.route('/check_orders')
def check_orders():
    global ready
    return {'ready': ready}

@app.route('/')
def index():
    return render_template('display.html', orders=orders)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if authToken == 0:
        return redirect('/login')
    if request.method == 'POST':
        print("POST request received")
        req = {"order_number": request.form.get('order_number'), "color": request.form.get('color'), "force": request.form.get('force')}
        print("Request:", req)
        if 'add' in request.form and req:
            print("Add request received")
            print((int(req['order_number'])) in orders[req['color']])
            if req['force'] == 'true':
                print("Force add request received")
                ready[req['color']].append(int(req['order_number']))
                print("Order added:", req['order_number'], "to", req['color'])
            elif((int(req['order_number'])) in orders[req['color']]):
                orders[req['color']].remove(int(req['order_number']))
                ready[req['color']].append(int(req['order_number']))
                print("Order added:", req['order_number'], "to", req['color'])
        elif 'remove' in request.form and req:
            print("Remove request received")
            try:
                ready[req['color']].remove(int(req['order_number']))
            except ValueError:
                pass
    return render_template('admin.html', orders=orders, ready=ready)

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
