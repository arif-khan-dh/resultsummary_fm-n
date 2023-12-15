import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `
                @import './src/styles/scss/1-setup/_colors.scss';
                @import './src/styles/scss/1-setup/_mixins.scss';            
            `,
        }
    }
  }
})
// @import './src/styles/scss/_colors.scss';
// @use './src/styles/scss/colors';

// css: {
//     preprocessorOptions: {
//         scss: {
//             additionalData: `
//             @import './src/styles/scss/_colors.scss';
//             `
//         }
//     }
//   }


// css: {
//     preprocessorOptions: {
//         scss: {
//             additionalData: `$primarycolor: orange;`,
//         }
//     }
//   }
