# GNB

## __GNB is Not Bootstrap__
###### Not to be confused with 'Goliath National Bank' from HIMYM ;-)   

A small CSS library that has the bare minimum layout and styling to get your HTML5 app started.  

Conceptually similar to Bootstrap, only about 1/10th the size atm. Final aim is
to be < 25% of the size of Bootstrap (uncompressed).

GNB is a pure CSS3 library, it has NO Javascript components.

### Built using {LESS}

# Installation

```bower install gnb```  

# Dependencies  
## Runtime  
- Fontawesome  
```html
 <link href="https://opensource.keycdn.com/fontawesome/4.6.3/font-awesome.min.css" rel="stylesheet" type="text/css" />
```  

## Complie time  
- node  
- npm  
- less - ```npm install less --save --only=dev```  
- less-plugin-clean-css - ```npm install less-plugin-clean-css --save --only=dev```  
- TypeScript - ```npm install typescript -g```  

## Development  
All dependencies are self-contained in package.json ```npm install``` will install all required dependencies locally.

# How to:  

1. Get started with the source code.
a. download the repository  
```
git clone https://github.com/sumitkm/gnb   
```   
b. Install TypeScript compiler globally (might need sudo)   
```
npm install typescript -g
```  
c. install all dependencies  
```
npm install
```  
d. compile gulp scripts  
```
tsc
```    
e. Compile LESS and start livereload. Demo page available on http://localhost:8080/demo
```
gulp dev
```

2. Compile only the LESS file   
```
gulp less
```

3. Find the final CSS file?  
Once you have run ```gulp less``` or ```gulp dev``` the LESS files are compiled into the ```./dist ``` folder.

4. Bower package ?  
Current version 0.1.1
