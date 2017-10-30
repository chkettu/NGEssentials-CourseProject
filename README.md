# Notes on Udemy's "Angular 4 Essentials"

## Resources

* [Udemy course](https://www.udemy.com/angular-essentials-angular-2-angular-4-with-typescript/)

## Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5. with the IntelliJ "New project"-assistant.

* Choose `File/New Project/Static Web/Angular CLI` to create project.
* run `npm install` from the command line.
* run `npm start` from the command line to start project.
* Open [link](http://localhost:4200) in your browser.

## Notes

Components and services should be created with the `ng`-command - it adds all configurations needed to the project files with the common Angular-notation.
* Create components with: `ng g c component --spec false` (`--spec false` creates component without test class)
* Create services with: `ng g s service --spec false`
* Create modules with: `ng g m module`

Two approaches to create a Form:
* Building `FormControls` and `FormGroups implicitly using `ngForm` and `ngControl` (as shown in the course).
* Building forms with `FormBuilder` (helper class to build forms more flexible). Git branch `spike/form-builder`.

Optimizations:
* Create your own `AppRoutingModule`.


