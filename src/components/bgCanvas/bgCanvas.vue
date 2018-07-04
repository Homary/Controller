<template>
<div class="bg-box"></div>
</template>

<script type="text/ecmascript-6">

export default{
    name: '',
    data: function() {
        return {
            AMOUNTX : 50,
            AMOUNTY : 50,
            particles: null, 
            particle: 0,
            count: 0,
            camera: null,
            scene: null,
            renderer: null,
            mouseX : 180,
            mouseY : -360,
            windowHalfX : window.innerWidth / 2,
            windowHalfY : window.innerHeight / 2
        }
    },
    mounted: function() {        
        this.init();
        setInterval(this.loop, 1000 / 60);
    },
    methods: {
        init() {
            var container;

            container = document.createElement( 'div' );
            container.style.position = "absolute";
            container.style.left = "-20px";
            container.style.bottom = "30px";
            container.style.zIndex = 99;
            document.body.appendChild( container );

            let SCREEN_WIDTH = window.innerWidth,
                SCREEN_HEIGHT = window.innerHeight,
                SEPARATION = 100;

            this.camera = new THREE.Camera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
            this.camera.position.z = 999;

            this.scene = new THREE.Scene();

            this.renderer = new THREE.CanvasRenderer();
            this.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT/5*3);

            this.particles = new Array();

            var i = 0;

            // 修改波浪颜色
            var material = new THREE.ParticleCircleMaterial( 0x00ff00, 1 );

            for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {

                for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {
                    
                    this.particle = this.particles[ i ++ ] = new THREE.Particle( material );
                    this.particle.position.x = ix * SEPARATION - ( ( this.AMOUNTX * SEPARATION ) / 2 );
                    this.particle.position.z = iy * SEPARATION - ( ( this.AMOUNTY * SEPARATION ) / 2 );
                    this.scene.add( this.particle );
                }
            }

            this.count = 0;
            container.appendChild( this.renderer.domElement );

            document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
            document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
            document.addEventListener( 'touchmove', this.onDocumentTouchMove, false );
        },
        //
        onDocumentMouseMove( event ) {
            this.mouseX = event.clientX - this.windowHalfX;
            //this.mouseY = event.clientY - this.windowHalfY;
        },
        onDocumentTouchStart( event ) {

            if ( event.touches.length == 1 ) {
                event.preventDefault();

                this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                //this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
            }
        },

        onDocumentTouchMove( event ) {

            if ( event.touches.length == 1 ) {

                event.preventDefault();

                this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                //this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;

            }
        },

        //
        loop() {
            this.camera.position.x += ( this.mouseX - this.camera.position.x ) * .05;
            this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * .05;

            var i = 0;

            for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {
                for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {
                    this.particle = this.particles[ i++ ];
                    this.particle.position.y = ( Math.sin( ( ix + this.count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + this.count ) * 0.5 ) * 50 );
                    this.particle.scale.x = this.particle.scale.y = ( Math.sin( ( ix + this.count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + this.count ) * 0.5 ) + 1 ) * 2;
                }
            }
            this.renderer.render( this.scene, this.camera );
            //this.stats.update();
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