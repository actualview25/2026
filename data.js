var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.9831493504940774,
        "pitch": 0.25139311844497314,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -1.459316601219637,
          "pitch": -0.14666308976181242,
          "rotation": 0,
          "target": "1-2"
        },
        {
          "yaw": -1.320811623316672,
          "pitch": -0.15798025027998008,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": -0.9841088158541407,
        "pitch": 0.2123904927493303,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -1.4598513258110302,
          "pitch": -0.16168295205297234,
          "rotation": 0,
          "target": "2-3"
        },
        {
          "yaw": -1.317433648349013,
          "pitch": -0.16852589164587073,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 382.5,
      "initialViewParameters": {
        "yaw": -0.9208295859002824,
        "pitch": 0.25049430202940925,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -1.4505600654098618,
          "pitch": -0.20993571733859895,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": -1.320834332210758,
          "pitch": -0.22334516454049336,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
