function message(text) {
    let terminal = document.getElementById("terminal");
    terminal.innerHTML = text;
}
/**
 * MODEL
 */

function new_model() {
    let model = {
        age: 0,
        //angle: 0.0,
        //angle_step: 0.01 * Math.PI,

        pausa: false,

        nuvem1: {
            x: 500,
            y: 300,
            vx: 2,
            vy: 0,
        },

        nuvem2: {
            x: 300,
            y: 300,
            vx: 2,
            vy: 0,
        }
    }

    document.addEventListener("keypress", (e) => {
        if (e.key === " ") model.pausa = !model.pausa;
    });

    model.update = update;

    return model;
}

function update() {

    if(this.pausa) return; 

    let nuvem1 = this.nuvem1;
    let nuvem2 = this.nuvem2;

    /*--------------------| Roda Total|-------------------*/
    //Eixo dos x
    if(nuvem1.x > 950 || nuvem1.x < 50){
        nuvem1.vx *= -1; 
    }

    nuvem1.x += nuvem1.vx;

    if(nuvem2.x > 950 || nuvem2.x < 50){
        nuvem2.vx *= -1; 
    }

    nuvem2.x += nuvem2.vx;


    //Eixo dos y
    if(nuvem1.y >  550|| nuvem1.y < 50){
        nuvem1.vy *= -1; 
    }
    nuvem1.y += nuvem1.vy;

    if(nuvem2.y >  550|| nuvem2.y < 50){
        nuvem2.vy *= -1; 
    }
    nuvem2.y += nuvem2.vy;

    

    this.age += 1;
    
}
/**
 * CONTEXT
 */
function new_context() {
    let nuvem1 = document.getElementById("n1");
    let nuvem2 = document.getElementById("n2");

    let context = {
        nuvem1: nuvem1,
        nuvem2: nuvem2,
    };

    context.render = render;

    return context;
}   

function render(model) {
    message(`AGE: ${model.age}`);

    //this.x3d_object.setAttribute(
    //    "rotation", `0 0.5 1 ${model.angle}`);

    //let deg = model.angle * 180.0 / Math.PI;
    this.nuvem1.setAttribute(
        "transform", `translate(${model.nuvem1.x} , ${model.nuvem1.y})`);

    this.nuvem2.setAttribute(
        "transform", `translate(${model.nuvem2.x} , ${model.nuvem2.y})`);
}

/*
*   MAIN
*/
function main() {
    message("I'm Alive.");

    let gc = new_context();
    let model = new_model();

    let step = (ts) => {
        model.update();
        gc.render(model);
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}