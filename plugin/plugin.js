"use strict";

{
  ////////////////////////////////////////////
  // The plugin ID is how Construct identifies different kinds of plugins.
  // *** NEVER CHANGE THE PLUGIN ID! ***
  // If you change the plugin ID after releasing the plugin, Construct will think it is an entirely different
  // plugin and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE PLUGIN.
  // Only the plugin name is displayed in the editor, so to rename your plugin change the name but NOT the ID.
  // If you want to completely replace a plugin, make it deprecated (it will be hidden but old projects keep working),
  // and create an entirely new plugin with a different plugin ID.
  const PLUGIN_ID = "Colyseus";
  ////////////////////////////////////////////

  const PLUGIN_VERSION = "0.10.0.0";
  const PLUGIN_CATEGORY = "web";
  const PLUGIN_AUTHOR = "Endel Dreyer";

  let app = null;

  const PLUGIN_CLASS = SDK.Plugins.Colyseus = class Colyseus extends SDK.IPluginBase
  {
    constructor()
    {
      super(PLUGIN_ID);

      SDK.Lang.PushContext("plugins.colyseus");

      this._info.SetIcon("icon.png", "image/png");
      this._info.SetName(lang(".name"));
      this._info.SetDescription(lang(".description"));
      this._info.SetVersion(PLUGIN_VERSION);
      this._info.SetCategory(PLUGIN_CATEGORY);
      this._info.SetAuthor("Endel Dreyer");
      this._info.SetHelpUrl(lang(".help-url"));
      this._info.SetIsSingleGlobal(false);

			// Support both the C2 and C3 runtimes
			this._info.SetSupportedRuntimes(["c2", "c3"]);

      this._info.AddFileDependency({
        filename: "colyseus.js",
        type: "external-script"
      });

      SDK.Lang.PushContext(".properties");
      this._info.SetProperties([
          new SDK.PluginProperty("text", "endpoint", "ws://localhost:2567")
      ]);
      SDK.Lang.PopContext(); // .properties

      SDK.Lang.PopContext();
    }
  };

  PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
