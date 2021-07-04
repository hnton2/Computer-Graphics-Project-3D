function getPointLight(color, intensity){
    var light = new THREE.PointLight(color,intensity);
    light.position.set(100, 100, 0);
    return light;
}

function getDirectionalLight(color, intensity){
    var light = new THREE.DirectionalLight(color,intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    return light;
}

function getSpotLight(color, intensity){
    var light = new THREE.SpotLight(color,intensity);
    light.position.set(100, 100, 0);
    return light;
}

function getAmbientLight(color, intensity){
    var light = new THREE.AmbientLight(color,intensity);
    light.position.set( 1, 1, 1 );
    return light;
}

function getHemisphereLight(skyColor, groundColor, intensity){
    var light = new THREE.AmbientLight(skyColor, groundColor, intensity);
    light.position.set( 1, 1, 1 );
    return light;
}