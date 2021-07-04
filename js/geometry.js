
function getSphere(size){
    var geometry = new THREE.SphereGeometry(size,24,24);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)'
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    return mesh;
}
function getSphere_Point(size,num){
    var geometry = new THREE.SphereGeometry(size,num,num);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)'
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    return mesh;
}
function getSphere_Line(size,num){
    var geometry = new THREE.SphereGeometry(size,num,num);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)'
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    return mesh;
}
function getSphere_Texture(size,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.SphereGeometry(size,24,24);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getCone(w,h,d){
    var geometry = new THREE.ConeGeometry(w,h,d);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    return mesh;
}
function getCone_Point(w,h,d,k){
    var geometry = new THREE.ConeGeometry(w,h,d,k);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    return mesh;
}
function getCone_Line(w,h,d){
    var geometry = new THREE.ConeGeometry(w,h,d);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    return mesh;
}
function getCone_Texture(w,h,d,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.ConeGeometry(w,h,d);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}

function getBox(w,h,d){
    var geometry = new THREE.BoxGeometry(w,h,d);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true,
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getBox_Texture(w,h,d,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.BoxGeometry(w,h,d);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getBox_Point(w,h,d,k,l,o){
    var geometry = new THREE.BoxGeometry(w,h,d,k,l,o);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getBox_Line(w,h,d,l){
    var geometry = new THREE.BoxGeometry(w,h,d,l,l,l);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getTorus(w,h,d,l){
    var geometry = new THREE.TorusGeometry(w,h,d,l);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true,
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 35;
    // mesh.position.z = 25;
    return mesh;
}
function getTorus_Texture(w,h,d,l,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.TorusGeometry(w,h,d,l);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 35;
    // mesh.position.z = 25;
    return mesh;
}
function getTorus_Point(w,h,d,k){
    var geometry = new THREE.TorusGeometry(w,h,d,k);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 35;
    // mesh.position.z = 25;
    return mesh;
}
function getTorus_Line(w,h,d,l){
    var geometry = new THREE.TorusGeometry(w,h,d,l);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 35;
    // mesh.position.z = 25;
    return mesh;
}
function getCylinder(w,h,d,k,q){
    var geometry = new THREE.CylinderGeometry(w,h,d,k,q);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getCylinder_Point(w,h,d,k,q){
    var geometry = new THREE.CylinderGeometry(w,h,d,k,q);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getCylinder_Line(w,h,d,k){
    var geometry = new THREE.CylinderGeometry(w,h,d,k);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getCylinder_Texture(w,h,d,k,q,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.CylinderGeometry(w,h,d,k,q);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}

function getTeapot(teapotSize){
    var geometry = new THREE.TeapotGeometry(teapotSize);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getTeapot_Point(teapotSize){
    var geometry = new THREE.TeapotGeometry(teapotSize);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getTeapot_Line(teapotSize){
    var geometry = new THREE.TeapotGeometry(teapotSize);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getTeapot_Texture(teapotSize,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.TeapotGeometry(teapotSize);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getKlein(k){
    var geometry = new THREE.ParametricGeometry( THREE.ParametricGeometries.klein, k, k );
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getKlein_Point(k){
    var geometry = new THREE.ParametricGeometry(THREE.ParametricGeometries.klein, k, k);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getKlein_Line(k){
    var geometry = new THREE.ParametricGeometry(THREE.ParametricGeometries.klein, k, k);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getKlein_Texture(k,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.ParametricGeometry(THREE.ParametricGeometries.klein, k, k);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getLathe(segments, phiStart, phiLength){
    var points = []; //Array to store vertex positions
    var height = 5;
    var count = 40;
    for (var i = 0; i < count; i++) {
        //Push the vertex coordinates into the array
        points.push(new THREE.Vector3((Math.sin(i * 0.2) + Math.cos(i * 0.3)) * height + 12, ( i - count ) + count / 2, 0));
    }

    //Create an object that stores the vertex sphere
    spGroup = new THREE.Object3D();
    var material = new THREE.MeshStandardMaterial({color: 'rgb(120,120,120)', transparent: false}); //Declare the texture used by the vertex sphere
    points.forEach(function (point) {
        var spGeom = new THREE.SphereGeometry(0.2); //Instantiate spherical geometry
        var spMesh = new THREE.Mesh(spGeom, material); //Generate mesh
        spMesh.position.copy(point); //Assign the coordinate position of the current vertex to the current sphere
        spGroup.add(spMesh); //Add to the object
    });
    var geometry = new THREE.LatheGeometry(points, segments, phiStart, phiLength);
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 20;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getLathe_Point(segments, phiStart, phiLength){
    var points = []; //Array to store vertex positions
    var height = 5;
    var count = 40;
    for (var i = 0; i < count; i++) {
        //Push the vertex coordinates into the array
        points.push(new THREE.Vector3((Math.sin(i * 0.2) + Math.cos(i * 0.3)) * height + 12, ( i - count ) + count / 2, 0));
    }

    //Create an object that stores the vertex sphere
    spGroup = new THREE.Object3D();
    var material = new THREE.PointsMaterial({color: 'rgb(120,120,120)', transparent: false}); //Declare the texture used by the vertex sphere
    points.forEach(function (point) {
        var spGeom = new THREE.SphereGeometry(0.2); //Instantiate spherical geometry
        var spMesh = new THREE.Mesh(spGeom, material); //Generate mesh
        spMesh.position.copy(point); //Assign the coordinate position of the current vertex to the current sphere
        spGroup.add(spMesh); //Add to the object
    });
    var geometry = new THREE.LatheGeometry(points, segments, phiStart, phiLength);
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 20;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getLathe_Line(segments, phiStart, phiLength){
    var points = []; //Array to store vertex positions
    var height = 5;
    var count = 40;
    for (var i = 0; i < count; i++) {
        //Push the vertex coordinates into the array
        points.push(new THREE.Vector3((Math.sin(i * 0.2) + Math.cos(i * 0.3)) * height + 12, ( i - count ) + count / 2, 0));
    }

    //Create an object that stores the vertex sphere
    spGroup = new THREE.Object3D();
    var material = new THREE.LineBasicMaterial({color: 'rgb(120,120,120)', transparent: false}); //Declare the texture used by the vertex sphere
    points.forEach(function (point) {
        var spGeom = new THREE.SphereGeometry(0.2); //Instantiate spherical geometry
        var spMesh = new THREE.Mesh(spGeom, material); //Generate mesh
        spMesh.position.copy(point); //Assign the coordinate position of the current vertex to the current sphere
        spGroup.add(spMesh); //Add to the object
    });
    var geometry = new THREE.LatheGeometry(points, segments, phiStart, phiLength);
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 20;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getLathe_Texture(segments, phiStart, phiLength,filename){
    var points = []; //Array to store vertex positions
    var height = 5;
    var count = 40;
    for (var i = 0; i < count; i++) {
        //Push the vertex coordinates into the array
        points.push(new THREE.Vector3((Math.sin(i * 0.2) + Math.cos(i * 0.3)) * height + 12, ( i - count ) + count / 2, 0));
    }

    //Create an object that stores the vertex sphere
    spGroup = new THREE.Object3D();
    
    points.forEach(function (point) {
        var spGeom = new THREE.SphereGeometry(0.2); //Instantiate spherical geometry
        var spMesh = new THREE.Mesh(spGeom, material); //Generate mesh
        spMesh.position.copy(point); //Assign the coordinate position of the current vertex to the current sphere
        spGroup.add(spMesh); //Add to the object
    });
    var geometry = new THREE.LatheGeometry(points, segments, phiStart, phiLength);
    
    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    var material = new THREE.MeshStandardMaterial({ map: texture, transparent: true}); //Declare the texture used by the vertex sphere
    const mesh = new THREE.Mesh( geometry, material );
    
    mesh.castShadow = true;
    mesh.position.y = 20;
    // mesh.position.z = 25;
    return mesh;
}

function getHeart(){
    const heartShape = new THREE.Shape();

    heartShape.moveTo( 25, 25 );
    heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
    heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
    heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
    heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
    heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
    heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
    
    const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 10, steps: 10, bevelSize: 10, bevelThickness: 10 };

    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 110;
    mesh.position.z = 25;
    mesh.rotation.x = Math.PI;
    // mesh.rotation.y = 145;
    return mesh;
}
function getHeart_Point(){
    const heartShape = new THREE.Shape();

    heartShape.moveTo( 25, 25 );
    heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
    heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
    heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
    heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
    heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
    heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
    
    const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 10, steps: 10, bevelSize: 10, bevelThickness: 10 };

    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 110;
    mesh.position.z = 25;
    mesh.rotation.x = Math.PI;
    return mesh;
}
function getHeart_Line(){
    const heartShape = new THREE.Shape();

    heartShape.moveTo( 25, 25 );
    heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
    heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
    heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
    heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
    heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
    heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
    
    const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 10, steps: 10, bevelSize: 10, bevelThickness: 10 };

    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 110;
    mesh.position.z = 25;
    mesh.rotation.x = Math.PI;
    return mesh;
}
function getHeart_Texture(filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const heartShape = new THREE.Shape();

    heartShape.moveTo( 25, 25 );
    heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
    heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
    heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
    heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
    heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
    heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
    
    const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 10, steps: 10, bevelSize: 10, bevelThickness: 10 };

    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 110;
    mesh.position.z = 25;
    mesh.rotation.x = Math.PI;
    return mesh;
}
function getTorusKnot(){
    const radius =  25;  
    const tubeRadius =  2.0;  
    const radialSegments = 30;  
    const tubularSegments =  87;  
    const p = 15;  
    const q = 19;  
    const geometry = new THREE.TorusKnotGeometry(
    radius, tubeRadius, tubularSegments, radialSegments, p, q);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true,
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 30;
    // mesh.position.z = 25;
    return mesh;
}
function getTorusKnot_Texture(filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const radius =  25;  
    const tubeRadius =  2.0;  
    const radialSegments = 30;  
    const tubularSegments =  87;  
    const p = 15;  
    const q = 19;  
    const geometry = new THREE.TorusKnotGeometry(
    radius, tubeRadius, tubularSegments, radialSegments, p, q);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getTorusKnot_Point(){
    const radius =  25;  
    const tubeRadius =  2.0;  
    const radialSegments = 30;  
    const tubularSegments =  87;  
    const p = 15;  
    const q = 19;  
    const geometry = new THREE.TorusKnotGeometry(
    radius, tubeRadius, tubularSegments, radialSegments, p, q);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getTorusKnot_Line(){
    const radius =  25;  
    const tubeRadius =  2.0;  
    const radialSegments = 30;  
    const tubularSegments =  87;  
    const p = 15;  
    const q = 19;  
    const geometry = new THREE.TorusKnotGeometry(
    radius, tubeRadius, tubularSegments, radialSegments, p, q);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getIcosahedron(k){
    var geometry = new THREE.IcosahedronGeometry(k);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getIcosahedron_Point(k){
    var geometry = new THREE.IcosahedronGeometry(k );
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getIcosahedron_Line(k){
    var geometry = new THREE.IcosahedronGeometry(k);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    // mesh.rotation.x = Math.PI/2;
    // mesh.rotation.y = 145;
    return mesh;
}
function getIcosahedron_Texture(k,filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.IcosahedronGeometry(k);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getOctahedron(){
    var geometry = new THREE.OctahedronGeometry(25);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true,
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getOctahedron_Texture(filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.OctahedronGeometry(25);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getOctahedron_Point(){
    var geometry = new THREE.OctahedronGeometry(25);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getOctahedron_Line(){
    var geometry = new THREE.OctahedronGeometry(25);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getTetrahedron(){
    var geometry = new THREE.TetrahedronGeometry(25);
    var material =  new THREE.MeshStandardMaterial({
        color: 'rgb(120,120,120)',
        transparent: true,
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getTetrahedron_Texture(filename){

    const texture = new THREE.TextureLoader().load('../textures/'+ filename, render );
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var geometry = new THREE.TetrahedronGeometry(25);
    const material = new THREE.MeshStandardMaterial( { map: texture, transparent: true } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getTetrahedron_Point(){
    var geometry = new THREE.TetrahedronGeometry(25);
    var material =  new THREE.PointsMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Points(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}
function getTetrahedron_Line(){
    var geometry = new THREE.TetrahedronGeometry(25);
    var material =  new THREE.LineBasicMaterial({
        color: 'rgb(120,120,120)',
        transparent: true
    });
    var mesh = new THREE.Line(
        geometry,
        material
    );
    mesh.castShadow = true;
    mesh.position.y = 25;
    // mesh.position.z = 25;
    return mesh;
}