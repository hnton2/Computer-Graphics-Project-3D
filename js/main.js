let cameraPersp, cameraOrtho, currentCamera;
let scene, renderer;
var gridhelp = new THREE.GridHelper( 1000, 10, 0x888888, 0x444444);
var currentMesh="";
var mesh;
var obj = getBox(50,50,50);
obj.name = 'obj';
let animate;
let orbitControls;
var path = './image_background/MainSquare/';
var sphere = getSphere(0.05);
var Sphere_light = getSphere_pointlight(5);
let light,Light_gui;
var plane;
var model3D = {name: ''};
var loader = new THREE.GLTFLoader();

// CAMERA AND OBJECT
//#region 
const aspect = window.innerWidth / window.innerHeight;

cameraPersp = new THREE.PerspectiveCamera(  
    30,
    window.innerWidth/window.innerHeight,
    1,
    10000
);

cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 200, - 600, 0.01, 30000 );
currentCamera = cameraPersp;

currentCamera.position.set( 1000, 500, 1000 );
currentCamera.lookAt( 0, 200, 0 );

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
document.getElementById('webgl').appendChild(renderer.domElement);

orbitControls = new THREE.OrbitControls(currentCamera,renderer.domElement);
// orbit.addEventListener( 'change', render );

var control = new THREE.TransformControls(currentCamera, renderer.domElement);
control.addEventListener( 'change',render);
control.addEventListener( 'dragging-changed', function ( event ) {
    orbitControls.enabled = ! event.value;
});
//#endregion

init();