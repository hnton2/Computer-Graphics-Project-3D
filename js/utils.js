class ColorGUIHelper {
    constructor(object, prop) {
      this.object = object;
      this.prop = prop;
    }
    get value() {
      return `#${this.object[this.prop].getHexString()}`;
    }
    set value(hexString) {
      this.object[this.prop].set(hexString);
    }
}

function init(){
    scene = new THREE.Scene();
    var gui = new dat.GUI();
    var clock = new THREE.Clock();

    var plane = getPlane(1000);
    var directionalLight = getDirectionalLight(1);
    
    currentMesh = "BoxGeometry";
    
    plane.name = 'plane-1';
    
    // scene.add(plane);
    const color = 0xFFFFFF;
    const intensity = 1;
    let light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
    scene.add(obj);
    scene.add(gridhelp) ;
    
    var Light_gui = gui.addFolder(`Light`);//${x}
    Light_gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
    Light_gui.add(light, 'intensity', 0, 2, 0.01);
    Light_gui.add(light.target.position, 'x', -10, 10);
    Light_gui.add(light.target.position, 'z', -10, 10);
    Light_gui.add(light.target.position, 'y', 0, 10);
    window.addEventListener( 'click', onWindowClick );
    window.addEventListener( 'resize', onWindowResize );
    control.attach( obj );
    scene.add( control );

    floatingDiv = document.createElement( 'div' );
    floatingDiv.className = 'floating';
    document.body.appendChild( floatingDiv );
    update(renderer,scene,currentCamera,orbitControls);
    // BACKGROUND
    //#region 
    document.getElementById( 'Main Square' ).addEventListener( 'click', function () {
        path = './image_background/MainSquare/';
        Background();
    } );
    document.getElementById( 'Desert' ).addEventListener( 'click', function () {
        path = './image_background/Desert/';
        Background();
    } );
    document.getElementById( 'Snowy' ).addEventListener( 'click', function () {
        path = './image_background/Snowy/';
        Background();
    } );
    document.getElementById( 'Galaxy' ).addEventListener( 'click', function () {
        path = './image_background/Galaxy/';
        Background();
    } );
    document.getElementById( 'BigRoad' ).addEventListener( 'click', function () {
        path = './image_background/BigRoad/';
        Background();
    } );
    //#endregion

    //ANIMATE
    //#region 
    document.getElementById( 'rolling_animate' ).addEventListener( 'click', function () {
       
        Rolling_animate();
        
    } );
    document.getElementById( 'moving_animate' ).addEventListener( 'click', function () {
        Moving_animate();
        // update(renderer,scene,currentCamera,orbitControls); 
    } );
    
    document.getElementById( 'Stop_animate' ).addEventListener( 'click', function () {
        Stop_animate();
        orbitControls.autoRotate = false;
    } );
    //#endregion 
  
    // GUI
    //#region 
    var folder = gui.addFolder(`Camera`);
        var cameraZRotation = new THREE.Group();
        var cameraYPosition = new THREE.Group();
        var cameraZPosition = new THREE.Group();
        var cameraXRotation = new THREE.Group();
        var cameraYRotation = new THREE.Group();
        cameraZRotation.name = 'cameraZRotation';
        cameraYPosition.name = 'cameraYPosition';
        cameraZPosition.name = 'cameraZPosition';
        cameraXRotation.name = 'cameraXRotation';
        cameraYRotation.name = 'cameraYRotation';

        cameraZRotation.add(currentCamera);
        cameraYPosition.add(cameraZRotation);
        cameraZPosition.add(cameraYPosition);
        cameraXRotation.add(cameraZPosition);
        cameraYRotation.add(cameraXRotation);

        folder.add(cameraZPosition.position, 'z', 0 , 3000);
        folder.add(cameraYRotation.rotation,'y',-Math.PI,Math.PI);
        folder.add(cameraXRotation.rotation,'x',-Math.PI,Math.PI);
        folder.add(cameraZRotation.rotation,'z',-Math.PI,Math.PI);
    //#endregion
    
    //TEXTURE
    //#region 
    document.getElementById( 'texture' ).addEventListener( 'click', function () {
        ClearGeometry();
        var name = document.getElementById('filename'); 
        switch(currentMesh){
            case "ConeGeometry":
                obj = getCone_Texture(25,50,100,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;
            case "BoxGeometry":
                obj = getBox_Texture(50,50,50,name.files.item(0).name);
                scene.add( obj );
                control.attach( obj );
                scene.add( control ); 
                break;
            case "CylinderGeometry":
                obj = getCylinder_Texture( 25, 25, 50, 50, 1,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;
            case "SphereGeometry":
                obj = getSphere_Texture(25,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;
            case "TorusGeometry":
                obj = getTorus_Texture(25, 9, 25, 100,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;   
            case "TeapotGeometry":
                obj = getTeapot_Texture(25,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;   
            case "KleinbottleGeometry":
                obj = getKlein_Texture(25,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;  
            case "LatheGeometry":
                obj = getLathe_Texture(120, 2, 2 * Math.PI,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;  
            case "ExtrudeGeometry":
                obj = getHeart_Texture(name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break; 
            case "TorusKnotGeometry":
                obj = getTorusKnot_Texture(name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;   
            case "IcosahedronGeometry":
                obj = getIcosahedron_Texture(25,name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;  
            case "OctahedronGeometry":
                obj = getOctahedron_Texture(name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;  
            case "TetrahedronGeometry":
                obj = getTetrahedron_Texture(name.files.item(0).name);
                scene.add(obj);
                control.attach( obj );
                scene.add( control );
                break;      
            default:
                obj = getBox_Texture(50,50,50,name.files.item(0).name);
                scene.add( obj );
                control.attach( obj );
                scene.add( control ); 
                break;
        }      
    } );
   //#endregion

    // EVENT
    //#region 

    //EventKEY
    //#region 
    window.addEventListener( 'keydown', function ( event ) {    
        switch ( event.keyCode ) {
            case 87: // W
                control.setMode( "translate" );
                break;

            case 69: // E
                control.setMode( "rotate" );
                break;

            case 82: // R
                control.setMode( "scale" );
                break;
            case 84: // X
                control.showX = ! control.showX;
                control.showY = ! control.showY;
                control.showZ = ! control.showZ;
            break;
        }
    });
    //#endregion

    // CHOOSE
    //#region 
    document.getElementById( 'Cone' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="ConeGeometry";
        obj = getCone(25,50,100);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    
    document.getElementById( 'cube' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh = "BoxGeometry";
        obj = getBox(50,50,50);
        scene.add(obj);
        control.attach( obj );
       scene.add( control );
    } );
    document.getElementById( 'cylinder' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="CylinderGeometry";
        obj = getCylinder( 25, 25, 50, 50, 1);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Torus' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TorusGeometry";
        obj = getTorus( 25, 9, 25, 100 );
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Sphere' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="SphereGeometry";
        obj = getSphere(25,24,24);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Teapot' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TeapotGeometry";
        obj = getTeapot(25);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Klein_bottle' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="KleinbottleGeometry";
        obj = getKlein(50);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Lathe' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="LatheGeometry";
        obj = getLathe(120, 2, 2 * Math.PI);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Heart' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="ExtrudeGeometry";
        obj = getHeart();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'TorusKnot' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TorusKnotGeometry";
        obj = getTorusKnot();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Icosahedron' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="IcosahedronGeometry";
        obj = getIcosahedron(25);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Octahedron' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="OctahedronGeometry";
        obj = getOctahedron();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Tetrahedron' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TetrahedronGeometry";
        obj = getTetrahedron();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Cone_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="ConeGeometry";
        obj = getCone_Point(25,50,100,100)
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'cube__Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh = "BoxGeometry";
        obj = getBox_Point(50,50,50,50,50,50);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'cylinder_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="CylinderGeometry";
        obj = getCylinder_Point( 25, 25, 50, 100, 100);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Sphere_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="SphereGeometry";
        obj = getSphere_Point(25,100);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Torus_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TorusGeometry";
        obj = getTorus_Point( 25, 9, 25, 200 );
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Teapot_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TeapotGeometry";
        obj = getTeapot_Point(50);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Klein_bottle_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="KleinbottleGeometry";
        obj = getKlein_Point(100);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Lathe_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="LatheGeometry";
        obj = getLathe_Point(120, 2, 2 * Math.PI);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Heart_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="ExtrudeGeometry";
        obj = getHeart_Point();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'TorusKnot_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TorusKnotGeometry";
        obj = getTorusKnot_Point();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Icosahedron_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="IcosahedronGeometry";
        obj = getIcosahedron_Point(25);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Octahedron_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="OctahedronGeometry";
        obj = getOctahedron_Point();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Tetrahedron_Point' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TetrahedronGeometry";
        obj = getTetrahedron_Point();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Cone_Line' ).addEventListener( 'click', function () {
        ClearGeometry( );
        currentMesh="ConeGeometry";
        obj = getCone_Line(25,50,100,100)
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'cube__Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh = "BoxGeometry";
        obj = getBox_Line(50,50,50,25);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'cylinder_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="CylinderGeometry";
        obj = getCylinder_Line( 25, 25, 50, 100, 100)
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Sphere_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="SphereGeometry";
        obj = getSphere_Line(25,25)
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Torus_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TorusGeometry";
        obj = getTorus_Line( 25, 9, 25, 100 );
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Teapot_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TeapotGeometry";
        obj = getTeapot_Line(25);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
        
    } );
    document.getElementById( 'Klein_bottle_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="KleinbottleGeometry";
        obj = getKlein_Line( 50);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Lathe_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="LatheGeometry";
        obj = getLathe_Line(120, 2, 2 * Math.PI);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Heart_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="ExtrudeGeometry";
        obj = getHeart_Line();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'TorusKnot_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TorusKnotGeometry";
        obj = getTorusKnot_Line();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Icosahedron_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="IcosahedronGeometry";
        obj = getIcosahedron_Line(25);
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Octahedron_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="OctahedronGeometry";
        obj = getOctahedron_Line();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'Tetrahedron_Line' ).addEventListener( 'click', function () {
        ClearGeometry();
        currentMesh="TetrahedronGeometry";
        obj = getTetrahedron_Line();
        scene.add(obj);
        control.attach( obj );
        scene.add( control );
    } );
    document.getElementById( 'PointLight' ).addEventListener( 'click', function () {
        scene.remove(light);      
        gui.removeFolder(Light_gui);
        const color = 0xFFFFFF;
        const intensity = 1;
        light = getPointLight(color, intensity)
        scene.add(light);
        Light_gui = gui.addFolder(`Light`);//${x}
        Light_gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
        Light_gui.add(light, 'intensity', 0, 2, 0.01);      
    } );
    document.getElementById( 'DirectionalLight' ).addEventListener( 'click', function () {
        scene.remove(light);      
        gui.removeFolder(Light_gui);
        const color = 0xFFFFFF;
        const intensity = 1;
        light = getDirectionalLight(color, intensity);
        scene.add(light);
        scene.add(light.target);
        Light_gui = gui.addFolder(`Light`);//${x}
        Light_gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
        Light_gui.add(light, 'intensity', 0, 2, 0.01);
        Light_gui.add(light.target.position, 'x', -10, 10);
        Light_gui.add(light.target.position, 'z', -10, 10);
        Light_gui.add(light.target.position, 'y', 0, 10);
    } );
    document.getElementById( 'SpotLight' ).addEventListener( 'click', function () {
        scene.remove(light);      
        gui.removeFolder(Light_gui);
        const color = 0xFFFFFF;
        const intensity = 1;
        light = getSpotLight(color, intensity);
        scene.add(light);
        scene.add(light.target);
        Light_gui = gui.addFolder(`Light`);//${x}
        Light_gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
        Light_gui.add(light, 'intensity', 0, 2, 0.01);      
        // Light_gui.add(light, 'penumbra', 0, 1, 0.01);
        // Light_gui.add(light.target.position, 'x', -10, 10);
        // Light_gui.add(light.target.position, 'z', -10, 10);
        // Light_gui.add(light.target.position, 'y', 0, 10);
    } );
    document.getElementById( 'AmbientLight' ).addEventListener( 'click', function () {
        scene.remove(light);
        gui.removeFolder(Light_gui);
        light = getAmbientLight(0xB1E1FF , 2 );
        scene.add( light );
        Light_gui = gui.addFolder(`Light`);//${x}
        Light_gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
        Light_gui.add(light, 'intensity', 0, 2, 0.01);
    } );
    document.getElementById( 'HemisphereLight' ).addEventListener( 'click', function () {
        scene.remove(light);  
        gui.removeFolder(Light_gui);    
        const skyColor = 0xB1E1FF;  // light blue
        const groundColor = 0xB97A20;  // brownish orange
        const intensity = 1;
        light = getHemisphereLight(skyColor, groundColor, intensity);
        scene.add( light );
        Light_gui = gui.addFolder(`Light`);//${x}
        Light_gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('skyColor');
        Light_gui.addColor(new ColorGUIHelper(light, 'groundColor'), 'value').name('groundColor');
        Light_gui.add(light, 'intensity', 0, 2, 0.01);
      
    } );
    //#endregion

    //REMOVE
    // #region 
    document.getElementById( 'Line' ).addEventListener( 'click', function () {
        ClearLine();
    } );
    document.getElementById( 'Mesh' ).addEventListener( 'click', function () {
        ClearMesh();
    } );
    document.getElementById( 'Point' ).addEventListener( 'click', function () {
        ClearPoint();
    } );
    // #endregion
}

function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;

    cameraPersp.aspect = aspect;
    cameraPersp.updateProjectionMatrix();

    cameraOrtho.left = cameraOrtho.bottom * aspect;
    cameraOrtho.right = cameraOrtho.top * aspect;
    cameraOrtho.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();
}

function onWindowClick( event ) {
    let needToClose = true;
    let target = event.target;
    while ( target !== null ) {

        if ( target === floatingDiv) {

            needToClose = false;
            break;
        }
        target = target.parentElement;
    }
    if ( needToClose ) {
        floatingDiv.style.display = 'none';
    }
}
function ClearGeometry() {

    for ( let i = 0; i < scene.children.length; i ++ ) {
        const child = scene.children[ i ];
        if ( child.isMesh || child.isPoints||child.isLine) {
            child.geometry.dispose();
            scene.remove( child );
            i --;
        }
    }
    scene.add(gridhelp ) ;
}
function ClearMesh() {

    for ( let i = 0; i < scene.children.length; i ++ ) {
        const child = scene.children[ i ];
        if ( child.isMesh) {
            child.geometry.dispose();
            scene.remove( child );
            i --;
        }
    }
    scene.add(gridhelp ) ;
}
function ClearPoint() {

    for ( let i = 0; i < scene.children.length; i ++ ) {
        const child = scene.children[ i ];
        if (child.isPoints) {
            child.geometry.dispose();
            scene.remove( child );
            i --;
        }
    }
    scene.add(gridhelp ) ;
}
function ClearLine() {

    for ( let i = 0; i < scene.children.length; i ++ ) {
        const child = scene.children[ i ];
        if (child.isLine) {
            child.geometry.dispose();
            scene.remove( child );
            i --;
        }
    }
}
function Background() {
    for ( let i = 0; i < scene.children.length; i ++ ) {
        const child = scene.children[ i ];
        if (child.isMesh || child.isPoints||child.isLine) {
            child.geometry.dispose();
            scene.remove( child );
            i --;
        }
    }
    var Material = getMaterial('standard','rgb(255,255,255)');
    obj = getMeshAnimate(currentMesh,Material,25,24);
    var planeMaterial = getMaterial('standard', 'rgb(255,255,255)');
    var plane = getPlaneAnimate(planeMaterial,300);

    var format = '.jpg';
    var url= [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
    ]

    var reflectionCube = new THREE.CubeTextureLoader().load(url);
    reflectionCube.format = THREE.RGBFormat;
    currentCamera.position.set( 5, 5,300);
    currentCamera.lookAt( 0, 10, 0 );

    scene.background = reflectionCube;
    var loader = new THREE.TextureLoader();
    planeMaterial.map = loader.load('./textures/texture.jpg');
    planeMaterial.bumpMap = loader.load('./textures/texture.jpg');
    planeMaterial.roughnessMap = loader.load('./textures/texture.jpg');
    planeMaterial.bumpScale = 0.01;
    planeMaterial.metalness = 0.1;
    planeMaterial.roughness = 0.7;
    planeMaterial.envMap = reflectionCube;
    Material.roughnessMap = loader.load('./textures/texture.jpg');
    Material.envMap = reflectionCube;

    var maps = ['map','bumpMap','roughnessMap'];
    maps.forEach(function(mapName){
    var texture = planeMaterial[mapName];
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(15,15);
    })

    obj.position.y = sphere.geometry.parameters.radius;
    scene.add(obj);
    control.attach( obj );
    scene.add( control );
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 1.0;
    // update(renderer,scene,currentCamera,orbitControls); 
}
function render() {
    renderer.render( scene, currentCamera );
}
function getMeshAnimate(currentMesh,material, size,segments){
    switch(currentMesh){
        case "SphereGeometry":
            var geometry = new THREE.SphereGeometry(size, segments, segments);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "BoxGeometry":
            var geometry = new THREE.BoxGeometry(size,size,size);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "ConeGeometry":
            var geometry = new THREE.ConeGeometry(size,50,100);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "TorusGeometry":
            var geometry = new THREE.TorusGeometry(size,9, 25, 100);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "CylinderGeometry":
            var geometry = new THREE.CylinderGeometry(size,size, 50, 50, 1);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "TeapotGeometry":
            var geometry = new THREE.TeapotGeometry(size);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "KleinbottleGeometry":
            var geometry = new THREE.ParametricGeometry(THREE.ParametricGeometries.klein, size,size);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "LatheGeometry":
            var points = []; 
            var height = 5;
            var count = 40;
            for (var i = 0; i < count; i++) {
                points.push(new THREE.Vector3((Math.sin(i * 0.2) + Math.cos(i * 0.3)) * height + 12, ( i - count ) + count / 2, 0));
            }

            spGroup = new THREE.Object3D();
            
            points.forEach(function (point) {
                var spGeom = new THREE.SphereGeometry(0.2); //Instantiate spherical geometry
                var spMesh = new THREE.Mesh(spGeom, material); //Generate mesh
                spMesh.position.copy(point); //Assign the coordinate position of the current vertex to the current sphere
                spGroup.add(spMesh); //Add to the object
            });
            var geometry = new THREE.LatheGeometry(points,120, 2, 2 * Math.PI);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "ExtrudeGeometry":
            const heartShape = new THREE.Shape();
            heartShape.moveTo( 25, 25 );
            heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
            heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
            heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
            heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
            heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
            heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
            
            const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 10, steps: 10, bevelSize: 10, bevelThickness: 10 };
        
            var geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            obj.position.y = 110;
            obj.position.z = 25;
            obj.rotation.x = Math.PI;
            break;
        case "TorusKnotGeometry":
            const radius =  25;  
            const tubeRadius =  2.0;  
            const radialSegments = 30;  
            const tubularSegments =  87;  
            const p = 15;  
            const q = 19;  
            var geometry = new THREE.TorusKnotGeometry(radius, tubeRadius, tubularSegments, radialSegments, p, q);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "IcosahedronGeometry":
            var geometry = new THREE.IcosahedronGeometry(size);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "OctahedronGeometry":
            var geometry = new THREE.OctahedronGeometry(size);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        case "TetrahedronGeometry":
            var geometry = new THREE.TetrahedronGeometry(size);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
            break;
        default:
            var geometry = new THREE.SphereGeometry(size, segments, segments);
            var obj = new THREE.Mesh(geometry, material);
            obj.castShadow = true;
    }
    return obj;
}
function getMaterial(type, color){
    var selectedMaterial;
    var materialOptions = {
        color:color ===undefined ? 'rgb(255,255,255)' : color
    };

    switch(type){
        case 'basic':
            selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
            break;
        case 'lambert':
            selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
            break;
        case 'phong':
            selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
            break;
        case 'standard':
            selectedMaterial = new THREE.MeshStandardMaterial(materialOptions);
        default:
            selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
            break;
    }
    return selectedMaterial;
}
function update(renderer, scene, currentCamera, orbitControls) {
	orbitControls.update();
	renderer.render(scene, currentCamera);
	requestAnimationFrame(function() {
		update(renderer, scene, currentCamera, orbitControls);
	});
}