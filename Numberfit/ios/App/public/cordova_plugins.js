
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-nativestorage.mainHandle",
          "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
          "pluginId": "cordova-plugin-nativestorage",
        "clobbers": [
          "NativeStorage"
        ]
        },
      {
<<<<<<< HEAD
=======
          "id": "cordova-plugin-nativestorage.mainHandle",
          "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
          "pluginId": "cordova-plugin-nativestorage",
        "clobbers": [
          "NativeStorage"
        ]
        },
      {
>>>>>>> save-cookie
          "id": "cordova-plugin-nativestorage.LocalStorageHandle",
          "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
          "pluginId": "cordova-plugin-nativestorage"
        },
      {
          "id": "cordova-plugin-nativestorage.NativeStorageError",
          "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
          "pluginId": "cordova-plugin-nativestorage"
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
<<<<<<< HEAD
      "cordova-plugin-nativestorage": "2.3.2"
=======
      "cordova-plugin-nativestorage": "2.3.2",
      "cordova-plugin-device": "2.0.2"
>>>>>>> save-cookie
    };
    // BOTTOM OF METADATA
    });
    