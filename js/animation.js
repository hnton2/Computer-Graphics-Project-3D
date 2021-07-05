function Rolling_animate() {
    if(model3D.name != '') {
        model3D.rotation.x += 0.01;
        model3D.rotation.y += 0.02;
    } else {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.02;
    }
    animate = requestAnimationFrame(Rolling_animate);
    renderer.render(scene, currentCamera);
}

function Moving_animate() {
    if(model3D.name != '') {
        model3D.position.x += 0.5;
    } else {
        if(obj.position.y <= 10) {
            obj.position.y -= 0.01;
            obj.rotation.x -= 0.01;
            obj.rotation.y -= 0.02;
        } else {
            obj.position.y += 0.01;
            obj.rotation.x += 0.01;
            obj.rotation.y += 0.02;
        }
    }
    animate = requestAnimationFrame(Moving_animate);
    renderer.render(scene, currentCamera);
}
function Stop_animate() {
    cancelAnimationFrame(animate);
}