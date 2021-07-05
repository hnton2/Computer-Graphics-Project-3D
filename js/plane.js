function getPlaneAnimate(material, size)
{
    var geometry = new THREE.PlaneGeometry(size,size);
    material.side = THREE.DoubleSide;
    var obj = new THREE.Mesh(geometry, material);
    obj.receiveShadow = true;
    
    return obj;
}


function getPlane(size){
    var geometry = new THREE.PlaneGeometry(size,size);
    var material =  new THREE.MeshPhongMaterial({
        color: 'rgb(120,120,120)',
        side: THREE.DoubleSide

    }); 
    var mesh = new THREE.Mesh(
        geometry,
        material        
    );
        mesh.receiveShadow = true;
        mesh.rotation.x = Math.PI/2;
    return mesh;
}