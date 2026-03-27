# WebGL extensions

Group for all WebGL extensions, see https://registry.khronos.org/webgl/extensions/

## WebGL extensions features

### ANGLE_instanced_arrays WebGL extension

The `ANGLE_instanced_arrays` extension for WebGL 1.0 contexts draws the same object multiple times or groups of similar objects multiple times, if the group shares the same vertex data, primitive count and type.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/ANGLE_instanced_arrays/>

**Browser support:**
- Chrome: 32
- Chrome Android: 30
- Edge: 12
- Firefox: 47
- Firefox for Android: 47
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [ANGLE_instanced_arrays](https://developer.mozilla.org/docs/Web/API/ANGLE_instanced_arrays)

### EXT_blend_minmax WebGL extension

The `EXT_blend_minmax` extension for WebGL 1.0 contexts adds two blend equations, the minimum and maximum color components of the source and destination colors.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_blend_minmax/>

**Browser support:**
- Chrome: 38
- Chrome Android: 38
- Edge: 17
- Firefox: 47
- Firefox for Android: 35
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [EXT_blend_minmax extension](https://developer.mozilla.org/docs/Web/API/EXT_blend_minmax)

### EXT_color_buffer_float WebGL extension

The `EXT_color_buffer_float` extension for WebGL 2.0 contexts adds color-renderable floating point formats to `renderbufferStorage()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_color_buffer_float/>

**Browser support:**
- Chrome: 56
- Chrome Android: 56
- Edge: 79
- Firefox: 51
- Firefox for Android: 51
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [EXT_color_buffer_float extension](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_float)

### EXT_color_buffer_half_float WebGL extension

The `EXT_color_buffer_half_float` extension for WebGL 1.0 and 2.0 contexts renders 16-bit floating-point color buffers.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_color_buffer_half_float/>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 17
- Firefox: 47
- Firefox for Android: 36
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [EXT_color_buffer_half_float extension](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_half_float)

### EXT_disjoint_timer_query WebGL extension

The `EXT_disjoint_timer_query` extension for WebGL 1.0 contexts measures the duration of a set of GL commands, without stalling the rendering pipeline.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_disjoint_timer_query/>

**Browser support:**
- Chrome: —
- Chrome Android: —
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [EXT_disjoint_timer_query extension](https://developer.mozilla.org/docs/Web/API/EXT_disjoint_timer_query)

### EXT_float_blend WebGL extension

The `EXT_float_blend` extension for WebGL 1.0 and 2.0 contexts adds 32-bit floating-point components to blending and draw buffers.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_float_blend/>

**Browser support:**
- Chrome: 75
- Chrome Android: 75
- Edge: 79
- Firefox: 67
- Firefox for Android: 67
- Safari: 14.1
- Safari on iOS: —

**MDN:**
- [EXT_float_blend extension](https://developer.mozilla.org/docs/Web/API/EXT_float_blend)

### EXT_frag_depth WebGL extension

The `EXT_frag_depth` extension for WebGL 1.0 and 2.0 contexts adds setting the depth value of a fragment from within the fragment shader.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_frag_depth/>

**Browser support:**
- Chrome: 38
- Chrome Android: 38
- Edge: 93
- Firefox: 47
- Firefox for Android: —
- Safari: 9
- Safari on iOS: 15

**MDN:**
- [EXT_frag_depth extension](https://developer.mozilla.org/docs/Web/API/EXT_frag_depth)

### EXT_shader_texture_lod WebGL extension

The `EXT_shader_texture_lod` extension for WebGL 1.0 and 2.0 contexts adds texture functions to the OpenGL ES Shading Language such that the shader writer explicitly controls of the level of detail (LOD).

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_shader_texture_lod/>

**Browser support:**
- Chrome: 38
- Chrome Android: 38
- Edge: 93
- Firefox: 47
- Firefox for Android: —
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [EXT_shader_texture_lod extension](https://developer.mozilla.org/docs/Web/API/EXT_shader_texture_lod)

### EXT_sRGB WebGL extension

The `EXT_sRGB` extension for WebGL 1.0 contexts adds sRGB support to textures and framebuffer objects.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_sRGB/>

**Browser support:**
- Chrome: 40
- Chrome Android: 40
- Edge: 80
- Firefox: 58
- Firefox for Android: 28
- Safari: 9
- Safari on iOS: 9

**MDN:**
- [EXT_sRGB extension](https://developer.mozilla.org/docs/Web/API/EXT_sRGB)

### EXT_texture_compression_bptc WebGL extension

The `EXT_texture_compression_bptc` extension for WebGL 1.0 and 2.0 contexts adds the BPTC compressed texture formats to `compressedTexImage2D()` and `compressedTexSubImage2D()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/>

**Browser support:**
- Chrome: 93
- Chrome Android: 92
- Edge: 93
- Firefox: 68
- Firefox for Android: —
- Safari: 16
- Safari on iOS: —

**MDN:**
- [EXT_texture_compression_bptc extension](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_bptc)

### EXT_texture_compression_rgtc WebGL extension

The `EXT_texture_compression_rgtc` extension for WebGL 1.0 and 2.0 contexts adds RGTC compressed texture formats. RGTC is a block-based texture compression format suited for unsigned and signed red and red-green textures. Also known as Red-Green Texture Compression.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/>

**Browser support:**
- Chrome: 93
- Chrome Android: 83
- Edge: 93
- Firefox: —
- Firefox for Android: —
- Safari: 14.1
- Safari on iOS: —

**MDN:**
- [EXT_texture_compression_rgtc extension](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_rgtc)

### EXT_texture_filter_anisotropic WebGL extension

The `EXT_texture_filter_anisotropic` extension for WebGL 1.0 and 2.0 contexts adds anisotropic filtering (AF). AF improves the quality of mipmapped texture access when viewing a textured primitive at an oblique angle.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_texture_filter_anisotropic/>

**Browser support:**
- Chrome: 34
- Chrome Android: 34
- Edge: 12
- Firefox: 47
- Firefox for Android: 47
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [EXT_texture_filter_anisotropic extension](https://developer.mozilla.org/docs/Web/API/EXT_texture_filter_anisotropic)

### EXT_texture_norm16 WebGL extension

The `EXT_texture_norm16` extension to WebGL 2.0 contexts adds 16 bit signed normalized and unsigned normalized fixed-point texture, renderbuffer, and texture buffer formats.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/EXT_texture_norm16/>

**Browser support:**
- Chrome: 87
- Chrome Android: 87
- Edge: 87
- Firefox: —
- Firefox for Android: —
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [EXT_texture_norm16 extension](https://developer.mozilla.org/docs/Web/API/EXT_texture_norm16)

### KHR_parallel_shader_compile WebGL extension

The `KHR_parallel_shader_compile` extension for WebGL 1.0 and 2.0 contexts checks the status of shader compilation without blocking the runtime.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/KHR_parallel_shader_compile/>

**Browser support:**
- Chrome: 76
- Chrome Android: 76
- Edge: 79
- Firefox: —
- Firefox for Android: —
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [KHR_parallel_shader_compile extension](https://developer.mozilla.org/docs/Web/API/KHR_parallel_shader_compile)

### OES_draw_buffers_indexed WebGL extension

The `OES_draw_buffers_indexed` extension for WebGL 2.0 contexts allows you to control blending on a per-color basis when writing to multiple color buffers simultaneously.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_draw_buffers_indexed/>

**Browser support:**
- Chrome: 100
- Chrome Android: 100
- Edge: 100
- Firefox: 108
- Firefox for Android: 108
- Safari: 16
- Safari on iOS: 16

**MDN:**
- [OES_draw_buffers_indexed](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed)

### OES_element_index_uint WebGL extension

The `OES_element_index_uint` extension for WebGL 1.0 contexts adds support for `gl.UNSIGNED_INT` types to `WebGLRenderingContext.drawElements()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_element_index_uint/>

**Browser support:**
- Chrome: 24
- Chrome Android: 25
- Edge: 12
- Firefox: 24
- Firefox for Android: 24
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [OES_element_index_uint extension](https://developer.mozilla.org/docs/Web/API/OES_element_index_uint)

### OES_fbo_render_mipmap WebGL extension

The `OES_fbo_render_mipmap` extension for WebGL 1.0 contexts attaches any level of a texture to a framebuffer object.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_fbo_render_mipmap/>

**Browser support:**
- Chrome: 80
- Chrome Android: 80
- Edge: 80
- Firefox: 71
- Firefox for Android: 79
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [OES_fbo_render_mipmap extension](https://developer.mozilla.org/docs/Web/API/OES_fbo_render_mipmap)

### OES_standard_derivatives WebGL extension

The `OES_standard_derivatives` extension for WebGL 1.0 contexts adds the GLSL derivative functions `dFdx`, `dFdy`, and `fwidth`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/>

**Browser support:**
- Chrome: 10
- Chrome Android: 18
- Edge: 12
- Firefox: 10
- Firefox for Android: 10
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [OES_standard_derivatives extension](https://developer.mozilla.org/docs/Web/API/OES_standard_derivatives)

### OES_texture_float WebGL extension

The `OES_texture_float` extension for WebGL 1.0 contexts adds floating-point pixel types for textures.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_texture_float/>

**Browser support:**
- Chrome: 10
- Chrome Android: 18
- Edge: 12
- Firefox: 6
- Firefox for Android: 6
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [OES_texture_float extension](https://developer.mozilla.org/docs/Web/API/OES_texture_float)

### OES_texture_float_linear WebGL extension

The `OES_texture_float_linear` extension for WebGL 1.0 and 2.0 contexts adds linear filtering with floating-point pixel types for textures.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_texture_float_linear/>

**Browser support:**
- Chrome: 29
- Chrome Android: 29
- Edge: 12
- Firefox: 24
- Firefox for Android: 24
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [OES_texture_float_linear extension](https://developer.mozilla.org/docs/Web/API/OES_texture_float_linear)

### OES_texture_half_float WebGL extension

The `OES_texture_half_float` extension for WebGL 1.0 contexts adds texture formats with 16-bit (also known as half float) and 32-bit floating-point components.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_texture_half_float/>

**Browser support:**
- Chrome: 27
- Chrome Android: 27
- Edge: 14
- Firefox: 29
- Firefox for Android: 29
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [OES_texture_half_float extension](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float)

### OES_texture_half_float_linear WebGL extension

The `OES_texture_half_float_linear` extension for WebGL 1.0 contexts adds linear filtering with half floating-point pixel types for textures.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_texture_half_float_linear/>

**Browser support:**
- Chrome: 29
- Chrome Android: 29
- Edge: 14
- Firefox: 30
- Firefox for Android: —
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [OES_texture_half_float_linear extension](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float_linear)

### OES_vertex_array_object WebGL extension

The `OES_vertex_array_object` extension for WebGL 1.0 contexts adds vertex array objects (VAOs) which encapsulate vertex array states. These objects keep pointers to vertex data and names for different sets of vertex data.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OES_vertex_array_object/>

**Browser support:**
- Chrome: 24
- Chrome Android: 25
- Edge: 17
- Firefox: 25
- Firefox for Android: 25
- Safari: 8
- Safari on iOS: 9

**MDN:**
- [OES_vertex_array_object extension](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object)

### OVR_multiview2 WebGL extension

The `OVR_multiview2` extension for WebGL 2.0 contexts renders into multiple views simultaneously. This especially useful for virtual reality (VR) and WebXR.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/OVR_multiview2/>

**Browser support:**
- Chrome: —
- Chrome Android: 93
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: —
- Safari on iOS: —

**MDN:**
- [OVR_multiview2 extension](https://developer.mozilla.org/docs/Web/API/OVR_multiview2)

### WEBGL_color_buffer_float WebGL extension

The `WEBGL_color_buffer_float` extension for WebGL 1.0 contexts adds the 32-bit floating-point type `RGBA32F` as a color-renderable format.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_color_buffer_float/>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 17
- Firefox: 30
- Firefox for Android: 30
- Safari: 14
- Safari on iOS: 15

**MDN:**
- [WEBGL_color_buffer_float extension](https://developer.mozilla.org/docs/Web/API/WEBGL_color_buffer_float)

### WEBGL_compressed_texture_astc WebGL extension

The `WEBGL_compressed_texture_astc` extension for WebGL 1.0 and 2.0 contexts adds the Adaptive Scalable Texture Compression format to `compressedTexImage2D()` and `compressedTexSubImage2D()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/>

**Browser support:**
- Chrome: 47
- Chrome Android: 47
- Edge: 79
- Firefox: 53
- Firefox for Android: 53
- Safari: 12
- Safari on iOS: 12

**MDN:**
- [WEBGL_compressed_texture_astc extension](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc)

### WEBGL_compressed_texture_etc WebGL extension

The `WEBGL_compressed_texture_etc` extension for WebGL 1.0 and 2.0 contexts adds many ETC2 and EAC compressed texture formats to `compressedTexImage2D()` and `compressedTexSubImage2D()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/>

**Browser support:**
- Chrome: 63
- Chrome Android: 63
- Edge: 79
- Firefox: —
- Firefox for Android: 51
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [WEBGL_compressed_texture_etc extension](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc)

### WEBGL_compressed_texture_etc1 WebGL extension

The `WEBGL_compressed_texture_etc1` extension for WebGL 1.0 and 2.0 contexts adds the ETC1 compressed texture format to `compressedTexImage2D()` and `compressedTexSubImage2D()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc1/>

**Browser support:**
- Chrome: 49
- Chrome Android: 49
- Edge: 79
- Firefox: —
- Firefox for Android: 30
- Safari: 13.1
- Safari on iOS: 13.4

**MDN:**
- [WEBGL_compressed_texture_etc1 extension](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc1)

### WEBGL_compressed_texture_pvrtc WebGL extension

The `WEBGL_compressed_texture_pvrtc` extension for WebGL 1.0 and 2.0 contexts adds PVRTC compressed texture formats to `compressedTexImage2D()` and `compressedTexSubImage2D()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/>

**Browser support:**
- Chrome: —
- Chrome Android: 28
- Edge: —
- Firefox: —
- Firefox for Android: —
- Safari: 7
- Safari on iOS: 7

**MDN:**
- [WEBGL_compressed_texture_pvrtc extension](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_pvrtc)

### WEBGL_compressed_texture_s3tc WebGL extension

The `WEBGL_compressed_texture_s3tc` extension for WebGL 1.0 and 2.0 contexts adds S3TC compressed texture formats to `compressedTexImage2D()` and `compressedTexSubImage2D()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc/>

**Browser support:**
- Chrome: 26
- Chrome Android: —
- Edge: 12
- Firefox: 22
- Firefox for Android: —
- Safari: 8
- Safari on iOS: —

**MDN:**
- [WEBGL_compressed_texture_s3tc extension](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc)

### WEBGL_compressed_texture_s3tc_srgb WebGL extension

The `WEBGL_compressed_texture_s3tc_srgb` extension for WebGL 1.0 and 2.0 contexts adds S3TC compressed texture formats for the sRGB colorspace to `compressedTexImage2D()` and `compressedTexSubImage2D()`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/>

**Browser support:**
- Chrome: 60
- Chrome Android: 60
- Edge: 80
- Firefox: 55
- Firefox for Android: —
- Safari: 14.1
- Safari on iOS: 14.5

**MDN:**
- [WEBGL_compressed_texture_s3tc_srgb extension](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)

### WEBGL_debug_renderer_info WebGL extension

The `WEBGL_debug_renderer_info` extension for WebGL 1.0 and 2.0 contexts exposes information about the graphics driver for debugging purposes.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_debug_renderer_info/>

**Browser support:**
- Chrome: 33
- Chrome Android: 33
- Edge: 12
- Firefox: 53
- Firefox for Android: 53
- Safari: 9.1
- Safari on iOS: 9.3

**MDN:**
- [WEBGL_debug_renderer_info extension](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_renderer_info)

### WEBGL_debug_shaders WebGL extension

The `WEBGL_debug_shaders` extension for WebGL 1.0 and 2.0 contexts adds the `getTranslatedShaderSource()` method to debug shaders from privileged contexts.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_debug_shaders/>

**Browser support:**
- Chrome: 47
- Chrome Android: 47
- Edge: 79
- Firefox: 56
- Firefox for Android: 56
- Safari: 14
- Safari on iOS: 14

**MDN:**
- [WEBGL_debug_shaders extension](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders)

### WEBGL_depth_texture WebGL extension

The `WEBGL_depth_texture` extension for WebGL 1.0 contexts defines 2D depth and depth-stencil textures.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_depth_texture/>

**Browser support:**
- Chrome: 26
- Chrome Android: 26
- Edge: 12
- Firefox: 22
- Firefox for Android: 22
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [WEBGL_depth_texture extension](https://developer.mozilla.org/docs/Web/API/WEBGL_depth_texture)

### WEBGL_draw_buffers WebGL extension

The `WEBGL_draw_buffers` extension for WebGL 1.0 contexts enables a fragment shader to write to several textures, which is useful for deferred shading, for example.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_draw_buffers/>

**Browser support:**
- Chrome: 36
- Chrome Android: —
- Edge: 17
- Firefox: 28
- Firefox for Android: —
- Safari: 9
- Safari on iOS: 15

**MDN:**
- [WEBGL_draw_buffers extension](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers)

### WEBGL_lose_context WebGL extension

The `WEBGL_lose_context` extension for WebGL 1.0 and 2.0 contexts simulates losing and restoring a `WebGLRenderingContext` or `WebGL2RenderingContext`.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_lose_context/>

**Browser support:**
- Chrome: 26
- Chrome Android: 26
- Edge: 17
- Firefox: 22
- Firefox for Android: 22
- Safari: 8
- Safari on iOS: 8

**MDN:**
- [WEBGL_lose_context extension](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context)

### WEBGL_multi_draw WebGL extension

The `WEBGL_multi_draw` extension for WebGL 1.0 and 2.0 contexts renders more than one primitive with a single function call.

**Spec:**
- <https://registry.khronos.org/webgl/extensions/WEBGL_multi_draw/>

**Browser support:**
- Chrome: 86
- Chrome Android: 86
- Edge: 86
- Firefox: —
- Firefox for Android: —
- Safari: 15
- Safari on iOS: 15

**MDN:**
- [WEBGL_multi_draw extension](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw)
