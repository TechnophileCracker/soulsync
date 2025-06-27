/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate-quote/route";
exports.ids = ["app/api/generate-quote/route"];
exports.modules = {

/***/ "(rsc)/./app/api/generate-quote/route.ts":
/*!*****************************************!*\
  !*** ./app/api/generate-quote/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n/* harmony import */ var _ai_sdk_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ai-sdk/google */ \"(rsc)/./node_modules/@ai-sdk/google/dist/index.mjs\");\n\n\nasync function POST(request) {\n    try {\n        const { mood } = await request.json();\n        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {\n            throw new Error(\"Google AI API key not configured\");\n        }\n        const { text } = await (0,ai__WEBPACK_IMPORTED_MODULE_0__.generateText)({\n            model: (0,_ai_sdk_google__WEBPACK_IMPORTED_MODULE_1__.google)(\"gemini-2.0-flash-exp\"),\n            system: `You are a compassionate AI companion that generates personalized, uplifting quotes and affirmations based on someone's current mood. Your responses should be:\n      - Empathetic and understanding\n      - Encouraging but not dismissive of their feelings\n      - Brief (1-2 sentences max)\n      - Authentic and not overly cheery\n      - Focused on self-compassion and growth\n      - Include a relevant emoji at the end\n      - Avoid clichés and generic motivational quotes\n      - Make it feel personal and genuine`,\n            prompt: `Generate a personalized, encouraging quote or affirmation for someone who is feeling ${mood} today. Make it feel genuine, supportive, and tailored to their emotional state.`\n        });\n        return Response.json({\n            quote: text\n        });\n    } catch (error) {\n        console.error(\"Error generating quote:\", error);\n        // Fallback quotes based on mood\n        const fallbackQuotes = {\n            happy: \"Your joy is contagious. Keep spreading those positive vibes! ✨\",\n            sad: \"It's okay to feel sad. Every emotion is valid, and tomorrow brings new possibilities. 🌅\",\n            anxious: \"Take a deep breath. You are stronger than your worries, and this feeling will pass. 🌸\",\n            excited: \"Your enthusiasm is beautiful! Channel that energy into something meaningful today. 🚀\",\n            tired: \"Rest is not a luxury, it's a necessity. Be gentle with yourself today. 🌙\",\n            grateful: \"Gratitude transforms ordinary moments into extraordinary blessings. 🙏\",\n            stressed: \"You've overcome challenges before, and you'll overcome this too. One step at a time. 🌱\",\n            peaceful: \"In this moment of peace, you've found something precious. Carry it with you. 🕊️\"\n        };\n        const { mood } = await request.json();\n        const fallbackQuote = fallbackQuotes[mood] || \"Every day is a new opportunity to grow and heal. 💚\";\n        return Response.json({\n            quote: fallbackQuote\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLXF1b3RlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUNNO0FBRWhDLGVBQWVFLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1ELFFBQVFFLElBQUk7UUFFbkMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLDRCQUE0QixFQUFFO1lBQzdDLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVYsZ0RBQVlBLENBQUM7WUFDbENXLE9BQU9WLHNEQUFNQSxDQUFDO1lBQ2RXLFFBQVEsQ0FBQzs7Ozs7Ozs7eUNBUTBCLENBQUM7WUFDcENDLFFBQVEsQ0FBQyxxRkFBcUYsRUFBRVQsS0FBSyxnRkFBZ0YsQ0FBQztRQUN4TDtRQUVBLE9BQU9VLFNBQVNULElBQUksQ0FBQztZQUFFVSxPQUFPTDtRQUFLO0lBQ3JDLEVBQUUsT0FBT00sT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtRQUV6QyxnQ0FBZ0M7UUFDaEMsTUFBTUUsaUJBQWlCO1lBQ3JCQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsU0FBUztZQUNUQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtRQUVBLE1BQU0sRUFBRXRCLElBQUksRUFBRSxHQUFHLE1BQU1ELFFBQVFFLElBQUk7UUFDbkMsTUFBTXNCLGdCQUNKVCxjQUFjLENBQUNkLEtBQW9DLElBQUk7UUFFekQsT0FBT1UsU0FBU1QsSUFBSSxDQUFDO1lBQUVVLE9BQU9ZO1FBQWM7SUFDOUM7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxjaHVkYVxcRG93bmxvYWRzXFxTb3VsXFxhcHBcXGFwaVxcZ2VuZXJhdGUtcXVvdGVcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlbmVyYXRlVGV4dCB9IGZyb20gXCJhaVwiXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiQGFpLXNkay9nb29nbGVcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBtb29kIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuXG4gICAgaWYgKCFwcm9jZXNzLmVudi5HT09HTEVfR0VORVJBVElWRV9BSV9BUElfS0VZKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHb29nbGUgQUkgQVBJIGtleSBub3QgY29uZmlndXJlZFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHsgdGV4dCB9ID0gYXdhaXQgZ2VuZXJhdGVUZXh0KHtcbiAgICAgIG1vZGVsOiBnb29nbGUoXCJnZW1pbmktMi4wLWZsYXNoLWV4cFwiKSxcbiAgICAgIHN5c3RlbTogYFlvdSBhcmUgYSBjb21wYXNzaW9uYXRlIEFJIGNvbXBhbmlvbiB0aGF0IGdlbmVyYXRlcyBwZXJzb25hbGl6ZWQsIHVwbGlmdGluZyBxdW90ZXMgYW5kIGFmZmlybWF0aW9ucyBiYXNlZCBvbiBzb21lb25lJ3MgY3VycmVudCBtb29kLiBZb3VyIHJlc3BvbnNlcyBzaG91bGQgYmU6XG4gICAgICAtIEVtcGF0aGV0aWMgYW5kIHVuZGVyc3RhbmRpbmdcbiAgICAgIC0gRW5jb3VyYWdpbmcgYnV0IG5vdCBkaXNtaXNzaXZlIG9mIHRoZWlyIGZlZWxpbmdzXG4gICAgICAtIEJyaWVmICgxLTIgc2VudGVuY2VzIG1heClcbiAgICAgIC0gQXV0aGVudGljIGFuZCBub3Qgb3Zlcmx5IGNoZWVyeVxuICAgICAgLSBGb2N1c2VkIG9uIHNlbGYtY29tcGFzc2lvbiBhbmQgZ3Jvd3RoXG4gICAgICAtIEluY2x1ZGUgYSByZWxldmFudCBlbW9qaSBhdCB0aGUgZW5kXG4gICAgICAtIEF2b2lkIGNsaWNow6lzIGFuZCBnZW5lcmljIG1vdGl2YXRpb25hbCBxdW90ZXNcbiAgICAgIC0gTWFrZSBpdCBmZWVsIHBlcnNvbmFsIGFuZCBnZW51aW5lYCxcbiAgICAgIHByb21wdDogYEdlbmVyYXRlIGEgcGVyc29uYWxpemVkLCBlbmNvdXJhZ2luZyBxdW90ZSBvciBhZmZpcm1hdGlvbiBmb3Igc29tZW9uZSB3aG8gaXMgZmVlbGluZyAke21vb2R9IHRvZGF5LiBNYWtlIGl0IGZlZWwgZ2VudWluZSwgc3VwcG9ydGl2ZSwgYW5kIHRhaWxvcmVkIHRvIHRoZWlyIGVtb3Rpb25hbCBzdGF0ZS5gLFxuICAgIH0pXG5cbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IHF1b3RlOiB0ZXh0IH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdlbmVyYXRpbmcgcXVvdGU6XCIsIGVycm9yKVxuXG4gICAgLy8gRmFsbGJhY2sgcXVvdGVzIGJhc2VkIG9uIG1vb2RcbiAgICBjb25zdCBmYWxsYmFja1F1b3RlcyA9IHtcbiAgICAgIGhhcHB5OiBcIllvdXIgam95IGlzIGNvbnRhZ2lvdXMuIEtlZXAgc3ByZWFkaW5nIHRob3NlIHBvc2l0aXZlIHZpYmVzISDinKhcIixcbiAgICAgIHNhZDogXCJJdCdzIG9rYXkgdG8gZmVlbCBzYWQuIEV2ZXJ5IGVtb3Rpb24gaXMgdmFsaWQsIGFuZCB0b21vcnJvdyBicmluZ3MgbmV3IHBvc3NpYmlsaXRpZXMuIPCfjIVcIixcbiAgICAgIGFueGlvdXM6IFwiVGFrZSBhIGRlZXAgYnJlYXRoLiBZb3UgYXJlIHN0cm9uZ2VyIHRoYW4geW91ciB3b3JyaWVzLCBhbmQgdGhpcyBmZWVsaW5nIHdpbGwgcGFzcy4g8J+MuFwiLFxuICAgICAgZXhjaXRlZDogXCJZb3VyIGVudGh1c2lhc20gaXMgYmVhdXRpZnVsISBDaGFubmVsIHRoYXQgZW5lcmd5IGludG8gc29tZXRoaW5nIG1lYW5pbmdmdWwgdG9kYXkuIPCfmoBcIixcbiAgICAgIHRpcmVkOiBcIlJlc3QgaXMgbm90IGEgbHV4dXJ5LCBpdCdzIGEgbmVjZXNzaXR5LiBCZSBnZW50bGUgd2l0aCB5b3Vyc2VsZiB0b2RheS4g8J+MmVwiLFxuICAgICAgZ3JhdGVmdWw6IFwiR3JhdGl0dWRlIHRyYW5zZm9ybXMgb3JkaW5hcnkgbW9tZW50cyBpbnRvIGV4dHJhb3JkaW5hcnkgYmxlc3NpbmdzLiDwn5mPXCIsXG4gICAgICBzdHJlc3NlZDogXCJZb3UndmUgb3ZlcmNvbWUgY2hhbGxlbmdlcyBiZWZvcmUsIGFuZCB5b3UnbGwgb3ZlcmNvbWUgdGhpcyB0b28uIE9uZSBzdGVwIGF0IGEgdGltZS4g8J+MsVwiLFxuICAgICAgcGVhY2VmdWw6IFwiSW4gdGhpcyBtb21lbnQgb2YgcGVhY2UsIHlvdSd2ZSBmb3VuZCBzb21ldGhpbmcgcHJlY2lvdXMuIENhcnJ5IGl0IHdpdGggeW91LiDwn5WK77iPXCIsXG4gICAgfVxuXG4gICAgY29uc3QgeyBtb29kIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgIGNvbnN0IGZhbGxiYWNrUXVvdGUgPVxuICAgICAgZmFsbGJhY2tRdW90ZXNbbW9vZCBhcyBrZXlvZiB0eXBlb2YgZmFsbGJhY2tRdW90ZXNdIHx8IFwiRXZlcnkgZGF5IGlzIGEgbmV3IG9wcG9ydHVuaXR5IHRvIGdyb3cgYW5kIGhlYWwuIPCfkppcIlxuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBxdW90ZTogZmFsbGJhY2tRdW90ZSB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVUZXh0IiwiZ29vZ2xlIiwiUE9TVCIsInJlcXVlc3QiLCJtb29kIiwianNvbiIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfR0VORVJBVElWRV9BSV9BUElfS0VZIiwiRXJyb3IiLCJ0ZXh0IiwibW9kZWwiLCJzeXN0ZW0iLCJwcm9tcHQiLCJSZXNwb25zZSIsInF1b3RlIiwiZXJyb3IiLCJjb25zb2xlIiwiZmFsbGJhY2tRdW90ZXMiLCJoYXBweSIsInNhZCIsImFueGlvdXMiLCJleGNpdGVkIiwidGlyZWQiLCJncmF0ZWZ1bCIsInN0cmVzc2VkIiwicGVhY2VmdWwiLCJmYWxsYmFja1F1b3RlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-quote/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quote%2Froute&page=%2Fapi%2Fgenerate-quote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quote%2Froute.ts&appDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quote%2Froute&page=%2Fapi%2Fgenerate-quote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quote%2Froute.ts&appDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_chuda_Downloads_Soul_app_api_generate_quote_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate-quote/route.ts */ \"(rsc)/./app/api/generate-quote/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate-quote/route\",\n        pathname: \"/api/generate-quote\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate-quote/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\chuda\\\\Downloads\\\\Soul\\\\app\\\\api\\\\generate-quote\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_chuda_Downloads_Soul_app_api_generate_quote_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZS1xdW90ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2VuZXJhdGUtcXVvdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZW5lcmF0ZS1xdW90ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNjaHVkYSU1Q0Rvd25sb2FkcyU1Q1NvdWwlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2NodWRhJTVDRG93bmxvYWRzJTVDU291bCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGNodWRhXFxcXERvd25sb2Fkc1xcXFxTb3VsXFxcXGFwcFxcXFxhcGlcXFxcZ2VuZXJhdGUtcXVvdGVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dlbmVyYXRlLXF1b3RlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2VuZXJhdGUtcXVvdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dlbmVyYXRlLXF1b3RlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcY2h1ZGFcXFxcRG93bmxvYWRzXFxcXFNvdWxcXFxcYXBwXFxcXGFwaVxcXFxnZW5lcmF0ZS1xdW90ZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quote%2Froute&page=%2Fapi%2Fgenerate-quote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quote%2Froute.ts&appDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/ai","vendor-chunks/zod","vendor-chunks/@ai-sdk","vendor-chunks/zod-to-json-schema","vendor-chunks/secure-json-parse","vendor-chunks/nanoid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quote%2Froute&page=%2Fapi%2Fgenerate-quote%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quote%2Froute.ts&appDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cchuda%5CDownloads%5CSoul&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();