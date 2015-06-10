# Curricula

## Outline
- World Wide Web
  - Introduction
  - Web Cake
  - HTML
  - CSS
  - JavaScript

## Contributing
All curricula is to be written in HTML, CSS, and JavaScript. No preprocessors. No servers. The curricula must also be instantly readable when opening in any browser. This is so that beginners can look through the code and understand how it works. Also so that it runs *anywhere* (even school computers).

### File Structure
- `lib/**`
  - Stores files used by *classes* and lessons. Files that only apply to one or two lessons should not be in here
  - All files in `lib` must be seperated by type
  - e.g. `lib/styles` for css styles and `lib/scripts` for javascript files
- `classes/**`
  - Stores all of the classes
  - `classes/**/**`
    - Inside each class folder are all of that class's lessons
    - Each lesson *must* be prefixed with a number. This allows for easy visual grepping of lesson progression
    - e.g. `classes/www/1-intro` stores the first lesson in the www class

