// Andrew Ribeiro 
// July 2018

function anim1(divID){
    var height = 300;
    var width = window.innerWidth

 
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    var camera = new THREE.PerspectiveCamera( 20, width/height, 0.1, 1000 );
    camera.position.z = 60;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, height );
    document.getElementById(divID).appendChild( renderer.domElement );

    var geometry = new THREE.ConeGeometry(5,5,32,32,false);
    var material = new THREE.MeshBasicMaterial( { color: 0xe2e2e2 } );
    var cone = new THREE.Mesh( geometry, material );
    scene.add( cone );
    
    const visWidth = width/camera.fov

    cone.position.x = -visWidth/2;

    var geometry = new THREE.PlaneGeometry( 120, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x98baf2, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    scene.add( plane );
    plane.rotation.x = 30;

    
    var xSpeed = 0.05
    var animate = function () {
        requestAnimationFrame( animate );
        if(cone.position.x >= visWidth || cone.position.x <= -visWidth){
            xSpeed = -xSpeed;
        }
        cone.position.x += xSpeed;
        renderer.render( scene, camera );
    };

    animate();
}

function createGraph(graph,graph_renderer,camera,visWidth,visHeight){
    const axisWidth = 0.20;
    var material = new THREE.MeshBasicMaterial( {color: 0x302f2f, side: THREE.DoubleSide});
    var geometry = new THREE.PlaneGeometry( visWidth*2,axisWidth, 0 );
    var xAxis = new THREE.Mesh( geometry, material );
    graph.add( xAxis );

    var material = new THREE.MeshBasicMaterial( {color: 0x302f2f, side: THREE.DoubleSide});
    var geometry = new THREE.PlaneGeometry( axisWidth,visHeight*2, 0 );
    var yAxis = new THREE.Mesh( geometry, material );
    graph.add( yAxis );

    // Draw Axis Ticks 
    yTicLoc = -visHeight/1.2;
    var tickGeom = new THREE.PlaneGeometry( 0.5,0.1, 0 );
    var tickMat = new THREE.MeshBasicMaterial( {color: 0x302f2f, side: THREE.DoubleSide});

    while(yTicLoc < visHeight){
        var tick = new THREE.Mesh( tickGeom, tickMat );
        tick.position.y = yTicLoc;
        graph.add( tick );
        yTicLoc += 1;
    }

    xTicLoc = -visWidth/1.2;
    var tickGeom = new THREE.PlaneGeometry( 0.1,0.5, 0 );
    var tickMat = new THREE.MeshBasicMaterial( {color: 0x302f2f, side: THREE.DoubleSide});

    while(xTicLoc < visWidth){
        var tick = new THREE.Mesh( tickGeom, tickMat );
        tick.position.x = xTicLoc;
        graph.add( tick );
        xTicLoc += 1;
    }
    


    graph_renderer.render( graph, camera );
}

function anim2(divID){
    var height = 300;
    var width = window.innerWidth/2

    // ##### Setup Scenes #####
    var bgTexture = new THREE.TextureLoader().load( "/post_code/mdp2018/wbg.jpg" );
    var scene = new THREE.Scene();
    scene.background = bgTexture;

    var graph = new THREE.Scene();
    graph.background = new THREE.Color( 0xffffff );

    // ##### Setup Camera #####
    var camera = new THREE.PerspectiveCamera( 20, width/height, 0.1, 1000 );
    camera.position.z = 60;
    const visWidth = width/camera.fov;
    const visHeight = height/camera.fov;

    // ##### Setup Renderers #####
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width , height );
    document.getElementById(divID).appendChild( renderer.domElement );

    var graph_renderer = new THREE.WebGLRenderer();
    graph_renderer.setSize( width , height );
    document.getElementById(divID).appendChild( graph_renderer.domElement );

    // ##### Simulation Start #####

    createGraph(graph,graph_renderer,camera,visWidth,visHeight);

    var geometry = new THREE.ConeGeometry(5,5,32,32,false);
    var material = new THREE.MeshBasicMaterial( { color: 0xe2e2e2 } );
    var cone = new THREE.Mesh( geometry, material );
    scene.add( cone );

    var graph_cone = new THREE.Mesh( geometry, material );
    graph.add( graph_cone );
    
    

    cone.position.x = -visWidth/2;

    var geometry = new THREE.PlaneGeometry( 120, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x98baf2, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    scene.add( plane );
    plane.rotation.x = 30;

    
    var xSpeed = 0.05
    var animate = function () {
        requestAnimationFrame( animate );
        if(cone.position.x >= visWidth || cone.position.x <= -visWidth){
            xSpeed = -xSpeed;
        }

        cone.position.x += xSpeed;
        renderer.render( scene, camera );
        graph_renderer.render(graph,camera);
    };

    animate();
}


function anim3(divID){
    var height = 300;
    var width = window.innerWidth

    var bgTexture = new THREE.TextureLoader().load( "/post_code/mdp2018/wbg.jpg" );
    var scene = new THREE.Scene();
    scene.background = bgTexture;

    var camera = new THREE.PerspectiveCamera( 20, width/height, 0.1, 1000 );
    camera.position.z = 60;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, height );
    document.getElementById(divID).appendChild( renderer.domElement );

    var geometry = new THREE.ConeGeometry(5,5,32,32,false);
    var material = new THREE.MeshBasicMaterial( { color: 0xe2e2e2 } );
    var cone = new THREE.Mesh( geometry, material );
    scene.add( cone );
    
    cone.position.x = -(width/camera.fov)/2;
    console.log(camera.fov);

    var geometry = new THREE.PlaneGeometry( 120, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x98baf2, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    scene.add( plane );
    plane.rotation.x = 30;

    
    const xSpeed = 0.05
    var animate = function () {
        requestAnimationFrame( animate );
        cone.position.x += xSpeed;
        cone.position.y = Math.sin(cone.position.x)*2;
        renderer.render( scene, camera );
    };

    animate();
}


function intro(divID){
    var height = 300;
    var width = window.innerWidth

    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    var camera = new THREE.PerspectiveCamera( 20, width/height, 0.1, 1000 );
    camera.position.z = 60;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, height );
    document.getElementById(divID).appendChild( renderer.domElement );

    var geometry = new THREE.ConeGeometry(5,5,32,32,false);
    var material = new THREE.MeshBasicMaterial( { color: 0xe2e2e2 } );
    var cone = new THREE.Mesh( geometry, material );
    scene.add( cone );

    var cone2 = new THREE.Mesh( geometry, material );
    scene.add( cone2 );
    
    const xSpeed = 0.05
    var animate = function () {
        requestAnimationFrame( animate );

        // First cone. 
        cone.rotation.x += xSpeed;
        cone.position.y = Math.sin(cone.rotation.x)*2;
        cone.scale.x = Math.sin(cone.rotation.x);
        const c = Math.ceil(cone.rotation.x);
        cone.material = new THREE.MeshBasicMaterial( 
            { color: "rgb("+c+","+(c*3)%255+", "+(c*4)%255+")" } 
        );

        // Second cone.
        cone2.position.y = Math.sin(cone.rotation.x)*2;
        cone2.scale.x = Math.sin(cone.rotation.x);
        
        // Render cone. 
        renderer.render( scene, camera );
    };

    animate();
}