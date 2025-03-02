//==== LESSON 1 ====// 
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}

//==== LESSON 2 ====// 

precision mediump float;

uniform vec2 u_resolution; //Canvas size (Width/height)
uniform vec2 u_mouse; //Mouse position in screen pixels
uniform float u_time; //Time in seconds

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
}
