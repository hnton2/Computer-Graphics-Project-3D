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