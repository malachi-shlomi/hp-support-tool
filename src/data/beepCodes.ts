const beepCodes: { [key: string]: { [key: string]: { error: string } } } = {
    "2": {
      "2": {
        "error": "The main area (DXE) of the BIOS has become corrupted and no recovery binary image is available. It can also occur when updating the BIOS. ",
      },
      "3": {
        "error": "The embedded controller policy requires you to type a key sequence.",
      },
      "4": {
        "error": "The embedded controller is checking or recovering the boot block.",
      },
    },
    "3": {
      "2": {
        "error": "A potential memory failure.",
      },
      "3": {
        "error": "A potential graphic chip failure.",
      },
      "4": {
        "error": "A potential power system failure.",
      },
      "5": {
        "error": "The computer does not detect the processor (CPU).",
      },
      "6": {
        "error": "The processor does not support an enabled feature.",
      },
      "7": {
        "error": "Computer access panel open or not installed, detected during startup or use.",
      },
    },
    "4": {
      "2": {
        "error": "The processor (CPU) might be overheating.",
      },
      "3": {
        "error": "The computer temperature is too high.",
      },
      "4": {
        "error": "The MXM graphics card temperature is too high.",
      },
    },
    "5": {
      "2": {
        "error": "The embedded controller is missing valid firmware.",
      },
      "3": {
        "error": "The component cannot be not reached by the BIOS within the established time limit.",
      },
      "4": {
        "error": "The system board is not initializing quickly enough for component.",
      },
    },
};

export default beepCodes;
  
