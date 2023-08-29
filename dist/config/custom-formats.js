"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var custom_formats_exports = {};
__export(custom_formats_exports, {
  Formats: () => Formats
});
module.exports = __toCommonJS(custom_formats_exports);
const Formats = [
  {
    section: "One Piece Tier"
  },
  {
    name: "[Gen X] OP",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3710915/">SV OU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3712513/">SV OU Sample Teams</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3712493/">SV OU Viability Rankings</a>`
    ],
    mod: "gen9",
    ruleset: ["Standard"],
    banlist: [
      "Uber",
      "AG",
      "Arena Trap",
      "Moody",
      "Sand Veil",
      "Shadow Tag",
      "Snow Cloak",
      "King's Rock",
      "Baton Pass",
      "Last Respects",
      "Shed Tail"
    ]
  }
];
//# sourceMappingURL=custom-formats.js.map
