function getPointLight(color, intensity){
    light = new THREE.PointLight(color,intensity);
    light.position.set(100, 100, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    return light;
}

function getDirectionalLight(color, intensity){
    light = new THREE.DirectionalLight(color,intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    return light;
}

function getSpotLight(color, intensity){
    light = new THREE.SpotLight(color,intensity);
    light.position.set(100, 100, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    return light;
}

function getAmbientLight(color, intensity){
    light = new THREE.AmbientLight(color,intensity);
    light.position.set( 1, 1, 1 );
    light.castShadow = true;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    return light;
}

function getHemisphereLight(skyColor, groundColor, intensity){
    light = new THREE.AmbientLight(skyColor, groundColor, intensity);
    light.position.set( 1, 1, 1 );
    light.castShadow = true;
    light.shadow.mapSize.width = 4096;
    light.shadow.mapSize.height = 4096;
    return light;
}