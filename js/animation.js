function Rolling_animate() {
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.02;

    animate = requestAnimationFrame(Rolling_animate);
    renderer.render(scene, currentCamera);
}

function Moving_animate() {
    if( obj.position.y <= 10)
    {
        obj.position.y -= 0.01;
        obj.rotation.x -= 0.01;
        obj.rotation.y -= 0.02;
    }
    else
    {
        obj.position.y += 0.01;
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.02;
    }
    animate = requestAnimationFrame(Moving_animate);
    renderer.render(scene, currentCamera);
}
function Stop_animate() {
    cancelAnimationFrame(animate);
}