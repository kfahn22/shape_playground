class ShapeUI {
  constructor(posx, posy, choice, label) {
    this.choice = choice;
    this.shape = null;
    this.message = null;
    this.addMessage = false;
    this.dropdown = createSelect(); // Create a select element
    this.label = createP(label);
    this.label.position(posx, posy - 40);
    this.dropdown.position(posx, posy); // Position the dropdown
    this.setupDropdown(); // Initialize dropdown with options
  }

  // Populate the dropdown with shape options
  setupDropdown() {
    const shapes = [
      "Arc",
      // "Astroid",
      // "Bicorn",
      // "Box",
      // "Butterfly",
      // "Cannibus",
      "Cassini Oval",
      // "Ceva",
      "Cornu Spiral",
      "Craniod",
      // "Deltoid",
      // "Eight",
      "Flower",
      "Gear",
      // "Heart",
      "Kiss Curve",
      // "Knot",
      "Lissajous",
      "Maltese Cross",
      // "Quadrifolium",
      "Quadrilateral",
      "Spiral",
      "Superellipse",
      "Supershape",
      // "Tear Drop",
      // "Zigzag",
    ];

    // Add shape options to the dropdown
    shapes.forEach((shape) => this.dropdown.option(shape));
    this.dropdown.selected(this.choice);
  }

  // Create a shape based on the selected option
  selectShape(shapeName, values) {
    let r = values[0]; 
    let a = values[1];
    let b = values[2];
    let m = values[3];
    let n1 = values[4];
    let n2 = values[5];
    let n3 = values[6];
    let n = values[7];
    let rotateShape = values[8];
    // Create a new Shape object with necessary parameters
    this.shape = new Shape(
      r, 
      a, 
      b, 
      m, 
      n1, 
      n2, 
      n3,
      n, 
      rotateShape
    );

    this.shape.points = []; // Clear any existing points
    this.message = null; // Clear out any prior message;
    // Use a switch statement to call the corresponding method
    switch (shapeName) {
      case "Arc":
        this.shape.arc();
        this.addMessage = true;
        this.message = "Arc is a f(a), a = 2 yields a circle. Start: a=1.";
        break;
      case "Cassini Oval":
        this.shape.cassiniOval();
        this.addMessage = true;
        this.message = "The cassini oval curve is a f(a, b). Start a = 0.7, b = 1.";
        break;
      case "Cornu Spiral":
        this.shape.cornuSpiral();
        this.addMessage = true;
        this.message = "The cornu spiral is f(a), a ~ [0.5, 2]. Start a=2.";
        break;
      case "Craniod":
        this.shape.craniod();
        this.addMessage = true;
        this.message = "The craniod curve is a f(a, b, m). Start: a=1, b=3, m=0";
        break;
      case "Gear":
        this.shape.gear();
        this.addMessage = true;
        this.message = "The gear curve is a f(a, b, m). Start: a=1, b=m=8.";
        break;
      case "Kiss Curve":
        this.shape.kissCurve();
        this.addMessage = true;
        this.message = "The kiss curve is a f(a, b).Start: a=2, b=1.";
        break;
      case "Lissajous":
        this.shape.lissajous();
        this.addMessage = true;
        this.message = "The lissajous curve is a f(a, b, m). Start: a = 4; b=4, m=8.";
        break;
      case "Maltese Cross":
        this.shape.malteseCross();
        this.addMessage = true;
        this.message = "The cross curve is a f(a, b). Start: a=3, b=2.";
        break;
      case "Quadrilateral":
        this.shape.quadrilaterial();
        this.addMessage = true;
        this.message = "The quadrilaterial curve is a f(m).";
        break;
      case "Flower":
        // This started out as the rose curve, but I have edit the code and now renders a flower-like shape
        // Can also create flower using Gear curve 
        this.shape.flower();
        this.addMessage = true;
        this.message = "The flower curve is a f(a, m). Start a=1.5, m=8;";
        break;
      case "Superellipse":
        this.shape.superellipse();
        this.addMessage = true;
        this.message = "The superellipse curve is a f(a, b, m). Start: a=b=1, m=6.";
        break;
      case "Supershape":
        this.shape.supershape();
        this.addMessage = true;
        this.message = "The supershape curve is a f(a, b, m, n1, n2, n3). Start: a=b=n1=n2=n3=1, m=8.";
        break;
      case "Spiral":
        this.shape.spiral();
        this.addMessage = true;
        this.message = "The spiral is a f(a, n), n ~ [-1, 1]. Start a=0.1, n=1." ;
        break;
      default:
        break;
    }
  }
}
