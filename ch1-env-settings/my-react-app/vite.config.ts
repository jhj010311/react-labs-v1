import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5555,
        // open: true, : run 했을 때 브라우저가 자동으로 켜지는 옵션
    },
});
