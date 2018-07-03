<template>
<div class="bg-box">
    
</div>
</template>

<script type="text/ecmascript-6">

export default{
    name: '',
    data: function() {
        return {
            camera: null,
            mouseX: 85,
            mouseY: -342, // 起始波动位置
            scene: null,
            AMOUNTX: 100,
            AMOUNTY: 70,
            particle: null,
            particles: null,
            count: 0,
            windowHalfX : 0,
            windowHalfY : 0,
            container: null,
            SEPARATION: 100
        }
    },
    mounted: function() {        
        this.init();
        this.animate();
    },
    methods: {
        init() {
            this.container = document.createElement('div');
            this.container.style.position = "absolute";
            this.container.style.bottom = "20px";
            this.container.style.left = "-20px";

            document.body.appendChild(this.container);

            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
            this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);

            // z不能太大
            this.camera.position.z = 1000;

            this.scene = new THREE.Scene();
            this.particles = new Array();

            var PI2 = Math.PI * 2;

            var material = new THREE.ParticleCanvasMaterial({
                color: 0xe1e1e1,
                program: function(context) {
                    context.beginPath();
                    context.arc(0, 0, .6, 0, PI2, true);
                    context.fill();
                }

            });
            var i = 0;

            for (var ix = 0; ix < this.AMOUNTX; ix++) {
                for (var iy = 0; iy < this.AMOUNTY; iy++) {
                    this.particle = this.particles[i++] = new THREE.Particle(material);
                    this.particle.position.x = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2);
                    this.particle.position.z = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) / 2);
                    this.scene.add(this.particle);
                }
            }

            this.renderer = new THREE.CanvasRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight / 2);
            this.container.appendChild(this.renderer.domElement);

            document.addEventListener('mousemove', this.onDocumentMouseMove, false);
            document.addEventListener('touchstart', this.onDocumentTouchStart, false);
            document.addEventListener('touchmove', this.onDocumentTouchMove, false);
            window.addEventListener('resize', this.onWindowResize, false);
        },
        onWindowResize() {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight / 2);
        },
        //
        onDocumentMouseMove(event) {
            this.mouseX = event.clientX - this.windowHalfX;
            this.mouseY = event.clientY - this.windowHalfY;
        },
        onDocumentTouchStart(event) {
            if (event.touches.length === 1) {
                event.preventDefault();
                this.mouseX = event.touches[0].pageX - this.windowHalfX;
                this.mouseY = event.touches[0].pageY - this.windowHalfY;
            }
        },
        onDocumentTouchMove(event) {
            if (event.touches.length === 1) {
                event.preventDefault();
                this.mouseX = event.touches[0].pageX - this.windowHalfX;
                this.mouseY = event.touches[0].pageY - this.windowHalfY;
            }
        },
        //
        animate() {
            requestAnimationFrame(this.animate);
            this.render();
        },
        render() {
            this.camera.position.x += (this.mouseX - this.camera.position.x) * .05;
            this.camera.position.y += (-this.mouseY - this.camera.position.y) * .05;
            this.camera.lookAt(this.scene.position);

            var i = 0;

            for (var ix = 0; ix < this.AMOUNTX; ix++) {

                for (var iy = 0; iy < this.AMOUNTY; iy++) {

                    this.particle = this.particles[i++];
                    this.particle.position.y = (Math.sin((ix + this.count) * 0.3) * 50) + (Math.sin((iy + this.count) * 0.5) * 50);
                    this.particle.scale.x = this.particle.scale.y = (Math.sin((ix + this.count) * 0.3) + 1) * 2 + (Math.sin((iy + this.count) * 0.5) + 1) * 2;
                }

            }

            this.renderer.render(this.scene, this.camera);
            this.count += 0.1;
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.bg-box{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 100%;
    color: #FFF;
    background-color: #193c6d; 
    background-image: url("//img.alicdn.com/tps/TB1d.u8MXXXXXXuXFXXXXXXXXXX-1900-790.jpg");
    background-size: 100%;
    background-image: -webkit-linear-gradient(0 0, 100% 100%, color-stop(0, #003073), color-stop(100%, #029797));
    background-image: linear-gradient(135deg, #003073, #029797);
    text-align: center;
    margin: 0px;
    overflow: hidden;
}
</style>