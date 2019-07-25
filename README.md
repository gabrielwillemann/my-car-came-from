# My Car Came From

Onde Foi Emplacado is the portuguese name.

In Brazil all vehicles have a license plate number follow pattern AAA1111 (three letters and four numbers).

Through license plate number it is possible to know the state the car came from. The complete list, plate number by states, is available [this link](https://pt.wikipedia.org/wiki/Placas_de_identifica%C3%A7%C3%A3o_de_ve%C3%ADculos_no_Brasil).

This app find the license plate number in list and show the car's home state.

Recently the Brazil adopted a new pattern: AAA1A111. The rule to conversion of the license plate number is:
* 0 = A
* 1 = B
* 2 = C
* 3 = D
* 4 = E
* 5 = F
* 6 = G
* 7 = H
* 8 = I
* 9 = J

For example: The car with plate AAA1111, your new plate is AAA1B111.

This new pattern don't change original list with plate number and states.

## Live Demo

[Single Page Application](https://ondefoiemplacado.sharklabs.com.br/)

[Mobile App]()


## Install the dependencies
```bash
npm install -g @quasar/cli
npm install -g cordova
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Build Single Page Application
```bash
quasar build
```

### Build Mobile App
```bash
quasar build -m android
```
