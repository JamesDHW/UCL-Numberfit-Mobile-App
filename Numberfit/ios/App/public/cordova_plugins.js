
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-youtube-video-player.YoutubeVideoPlayer",
          "file": "plugins/cordova-plugin-youtube-video-player/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
          "pluginId": "cordova-plugin-youtube-video-player",
        "clobbers": [
          "YoutubeVideoPlayer"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-youtube-video-player": "2.4.0",
      "cordova-plugin-device": "2.0.3"
    };
    // BOTTOM OF METADATA
    });
    