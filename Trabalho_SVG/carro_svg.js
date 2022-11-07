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
        angle: 0.0,
        angle_step: 0.01 * Math.PI,

        pausa: false,
   
        nuvens:{

            nuvem1: {
                x: 100, 
                y: 15,
                vx: 0.6,
                vy: 0.2,
            },

            nuvem2: {
                x: 300, 
                y: 12,
                vx: 0.7,
                vy: -0.2,
            },

            nuvem3: {
                x: 500, 
                y: 10,
                vx: 0.8,
                vy: 0.2,
            }
       },

       tracejados:{

            tracejado1: {
                x: 0, 
                y: 470,
                vx: 1.7,
                
            },
            

            tracejado2: {
                x: 120, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado3: {
                x: 240, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado4: {
                x: 360, 
                y: 470,
                vx: 1.7,
               
            },

            tracejado5: {
                x: 480, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado6: {
                x: 600, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado7: {
                x: 720, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado8: {
                x: 840, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado9: {
                x: 960, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado10: {
                x: 1080, 
                y: 470,
                vx: 1.7,
                
            },

            tracejado11: {
                x: 1200, 
                y: 470,
                vx: 1.7,
                
            }


       },
        carro: {
            x: 920,
            y: 295,
            vx: -3.5,
        },

        rodaD: {
            angle: 0.0,
            angle_step: 0.01 * Math.PI,
        },

        rodaF: {
            angle: 0.0,
            angle_step: -0.01 * Math.PI, 
        },

        carro2: {
            x: 1320,
            y: 295,
            vx: -3.5,
        },

        rodaD2: {
            angle: 0.0,
            angle_step: 0.01 * Math.PI,
        },

        rodaF2: {
            angle: 0.0,
            angle_step: -0.01 * Math.PI, 
        },

        
    }

    document.addEventListener("keypress", (e) => {
        if (e.key === " ") model.pausa = !model.pausa;
    });

    model.update = update;

    return model;
}

function update_cloud(cloud){
    //Eixo dos x
    if(cloud.x > 1200){
        cloud.x=-150; 
    }
    cloud.x += cloud.vx;

    //Eixo dos y
    if(cloud.y >  25|| cloud.y < 5){
        cloud.vy *= -1; 
    }
    cloud.y += cloud.vy;
}

function update_tracejado(traco){
    //Eixo dos x
    if(traco.x > 1260){
        traco.x=-60; 
    }
    traco.x += traco.vx;

}


function update() {

    if(this.pausa) return; 

    let nuvem1 = this.nuvens.nuvem1;
    let nuvem2 = this.nuvens.nuvem2;
    let nuvem3 = this.nuvens.nuvem3;
    let tracejado1 = this.tracejados.tracejado1;
    let tracejado2 = this.tracejados.tracejado2;
    let tracejado3 = this.tracejados.tracejado3;
    let tracejado4 = this.tracejados.tracejado4;
    let tracejado5 = this.tracejados.tracejado5;
    let tracejado6 = this.tracejados.tracejado6;
    let tracejado7 = this.tracejados.tracejado7;
    let tracejado8 = this.tracejados.tracejado8;
    let tracejado9 = this.tracejados.tracejado9;
    let tracejado10 = this.tracejados.tracejado10;
    let tracejado11 = this.tracejados.tracejado11;
    let carro= this.carro;
    let rodaF = this.rodaF;
    let rodaD = this.rodaD;
    let carro2=this.carro2;
    let rodaF2 = this.rodaF2;
    let rodaD2 = this.rodaD2;



    update_cloud(nuvem1);
    update_cloud(nuvem2);
    update_cloud(nuvem3);

    update_tracejado(tracejado1);
    update_tracejado(tracejado2);
    update_tracejado(tracejado3);
    update_tracejado(tracejado4);
    update_tracejado(tracejado5);
    update_tracejado(tracejado6);
    update_tracejado(tracejado7);
    update_tracejado(tracejado8);
    update_tracejado(tracejado9);
    update_tracejado(tracejado10);
    update_tracejado(tracejado11);

    if(carro.x<-350)
        carro.x=1150;
    
    carro.x+=carro.vx;

    if(carro2.x<-350)
        carro2.x=1150;
    
    carro2.x+=carro2.vx;

   
    /*--------------------| Roda Exterior |-------------------*/

    this.rodaF.angle += this.rodaF.angle_step;

    /*--------------------| Roda Interior |-------------------*/

    this.rodaD.angle += this.rodaD.angle_step;

    /*--------------------| Roda Exterior do perseguidor |-------------------*/

    this.rodaF2.angle += this.rodaF2.angle_step;

    /*--------------------| Roda Interior do perseguidor |-------------------*/

    this.rodaD2.angle += this.rodaD2.angle_step;

    this.age += 1;
    
}
/**
 * CONTEXT
 */
function new_context() {

    //let x3d_object = document.getElementById("x3d-object");

    let nuvem1 = document.getElementById("nuvem1");
    let nuvem2 = document.getElementById("nuvem2");
    let nuvem3 = document.getElementById("nuvem3");

    let tracejado1 = document.getElementById("tracejado1");
    let tracejado2 = document.getElementById("tracejado2");
    let tracejado3 = document.getElementById("tracejado3");
    let tracejado4 = document.getElementById("tracejado4");
    let tracejado5 = document.getElementById("tracejado5");
    let tracejado6 = document.getElementById("tracejado6");
    let tracejado7 = document.getElementById("tracejado7");
    let tracejado8 = document.getElementById("tracejado8");
    let tracejado9 = document.getElementById("tracejado9");
    let tracejado10 = document.getElementById("tracejado10");
    let tracejado11 = document.getElementById("tracejado11");

    let carro = document.getElementById("car");
    let rodaDentro = document.getElementById("roda_dianteira");
    let rodaFora = document.getElementById("roda_traseira");

    let carro2 = document.getElementById("car2");
    let rodaDentro2 = document.getElementById("roda_dianteira2");
    let rodaFora2 = document.getElementById("roda_traseira2");



    

    let context = {
        //x3d_object: x3d_object,
        nuvem1: nuvem1,
        nuvem2: nuvem2,
        nuvem3: nuvem3,
        tracejado1: tracejado1,
        tracejado2: tracejado2,
        tracejado3: tracejado3,
        tracejado4: tracejado4,
        tracejado5: tracejado5,
        tracejado6: tracejado6,
        tracejado7: tracejado7,
        tracejado8: tracejado8,
        tracejado9: tracejado9,
        tracejado10: tracejado10,
        tracejado11: tracejado11,
        carro: carro,
        rodaFora: rodaFora,
        rodaDentro: rodaDentro,
        carro2: carro2,
        rodaFora2: rodaFora2,
        rodaDentro2: rodaDentro2,
        

    };

    context.render = render;

    return context;
}   

function render(model) {
    message(`AGE: ${model.age}`);

    //this.x3d_object.setAttribute(
    //    "rotation", `0 0.5 1 ${model.angle}`);

    this.nuvem1.setAttribute(
        "transform", `translate(${model.nuvens.nuvem1.x} , ${model.nuvens.nuvem1.y})`);

    this.nuvem2.setAttribute(
        "transform", `translate(${model.nuvens.nuvem2.x} , ${model.nuvens.nuvem2.y})`);

    this.nuvem3.setAttribute(
        "transform", `translate(${model.nuvens.nuvem3.x} , ${model.nuvens.nuvem3.y})`);

    this.tracejado1.setAttribute(
        "transform", `translate(${model.tracejados.tracejado1.x})`);

    this.tracejado2.setAttribute(
        "transform", `translate(${model.tracejados.tracejado2.x})`);

    this.tracejado3.setAttribute(
        "transform", `translate(${model.tracejados.tracejado3.x})`);

    this.tracejado4.setAttribute(
        "transform", `translate(${model.tracejados.tracejado4.x})`);

    this.tracejado5.setAttribute(
        "transform", `translate(${model.tracejados.tracejado5.x})`);

    this.tracejado6.setAttribute(
        "transform", `translate(${model.tracejados.tracejado6.x})`);

    this.tracejado7.setAttribute(
        "transform", `translate(${model.tracejados.tracejado7.x})`);

    this.tracejado8.setAttribute(
        "transform", `translate(${model.tracejados.tracejado8.x})`);

    this.tracejado9.setAttribute(
        "transform", `translate(${model.tracejados.tracejado9.x})`);

    this.tracejado10.setAttribute(
        "transform", `translate(${model.tracejados.tracejado10.x})`);

    this.tracejado11.setAttribute(
        "transform", `translate(${model.tracejados.tracejado11.x})`);

    
    
    this.carro.setAttribute(
            "transform", `translate(${model.carro.x})`);
    
    this.carro2.setAttribute(
        "transform", `translate(${model.carro2.x})`);

    let deg = model.rodaF.angle * 180.0 / Math.PI;
    this.rodaFora.setAttribute(
        "transform", `rotate(${deg})`);
        
    let deg2 = model.rodaD.angle * 180.0 / Math.PI;
    this.rodaDentro.setAttribute(
        "transform", `rotate(${deg2})`);

    
    let deg3 = model.rodaF2.angle * 180.0 / Math.PI;
    this.rodaFora2.setAttribute(
        "transform", `rotate(${deg3})`);
            
    let deg4 = model.rodaD2.angle * 180.0 / Math.PI;
    this.rodaDentro2.setAttribute(
        "transform", `rotate(${deg4})`);
    

    
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