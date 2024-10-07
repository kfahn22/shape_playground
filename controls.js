class AddControls {
  constructor(pos, values) {
    this.backgroundDropdown = new PaletteDropdown(
      pos,
      90,
      "white",
      "Background Color"
    );
    this.backgrounddropdown = this.backgroundDropdown.dropdown;
    this.strokeDropdown = new PaletteDropdown(
      pos,
      145,
      "black",
      "Stroke Color"
    );
    this.strokedropdown = this.strokeDropdown.dropdown;
    this.fillDropdown = new PaletteDropdown(
      pos,
      190,
      "blue",
      "Fill Color"
    );
    this.filldropdown = this.fillDropdown.dropdown;
    // Create an instance of the SliderGroup class
    this.sliderGroup = new SliderGroup(
      10,
      4, // strokeWeight
      0.2*width, // r
      1, // a
      1, // b
      8, // m
      1, // n1
      1, // n2
      1, // n3
      1, // n
      0, // shape angle
    );
    this.sliders = this.sliderGroup.sliders;
    this.sliderValues = this.sliderGroup.getValues();
    this.shape_ui = new ShapeUI(pos, 35, "Gear", "Shape");
    this.shapeMessage = this.shape_ui.message;
    this.addMessage = this.shape_ui.addMessage;
    this.shapeDropdown = this.shape_ui.dropdown;
    // Checkbox to determine whether shapes have stroke
    this.addStroke = createCheckbox("Add stroke", true);
    this.addStroke.position(pos, 230);
    this.addStroke.style("color", "white");
    // Checkbox to determine whether shapes are filled
    this.fillShape = createCheckbox("Fill shape", true);
    this.fillShape.position(pos, 260);
    this.fillShape.style("color", "white");
    this.values = [];
  }

  getColors(background, stroke, fill) {
    this.backgroundDropdown.getColor(background);
    this.strokeDropdown.getColor(stroke);
    this.fillDropdown.getColor(fill);
    return [
      this.backgroundDropdown.color,
      this.strokeDropdown.color,
      this.fillDropdown.color,
    ];
  }

  // Return instance of dropdowns
  returnDropdowns() {
    return [
      this.shapeDropdown,
      this.backgrounddropdown,
      this.strokedropdown,
      this.filldropdown,
    ];
  }

  returnCheckboxes() {
    return [this.addStroke, this.fillShape];
  }

  // Get values from dropdowns, checkboxes, and sliders
  getValues() {
    this.values = [];
    this.values[0] = this.shapeDropdown.selected();
    this.values[1] = this.backgrounddropdown.selected();
    this.values[2] = this.strokedropdown.selected();
    this.values[3] = this.filldropdown.selected();
    this.values[4] = this.addStroke.checked();
    this.values[5] = this.fillShape.checked();
    let sliderValues = this.sliderGroup.getValues();
    this.sliderGroup.updateLabels();
    for (let s of sliderValues) {
      this.values.push(s);
    }
  }
}
