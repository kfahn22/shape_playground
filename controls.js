class AddControls {
  constructor(values, shapeChoice, strokeChoice, fillChoice) {
    this.pos = values.pos;
    this.strokeDropdown = new PaletteDropdown(
      this.pos,
      100,
      strokeChoice,
      "Stroke Color"
    );
    this.strokedropdown = this.strokeDropdown.dropdown;
    this.fillDropdown = new PaletteDropdown(
      this.pos,
      170,
      fillChoice,
      "Fill Color"
    );
    this.filldropdown = this.fillDropdown.dropdown;
    // Create an instance of the SliderGroup class
    this.sliderGroup = new SliderGroup(
      values
    );
    this.sliders = this.sliderGroup.sliders;
    this.sliderValues = this.sliderGroup.getValues();
    this.shape_ui = new ShapeUI(this.pos, 20, shapeChoice, "Shape");
    this.shapeMessage = this.shape_ui.message;
    this.addMessage = this.shape_ui.addMessage;
    this.shapeDropdown = this.shape_ui.dropdown;
    // Checkbox to determine whether shapes have stroke
    this.addStroke = createCheckbox("Add stroke", true);
    this.addStroke.position(this.pos, 210);
    this.addStroke.style("color", "white");
    // Checkbox to determine whether shapes are filled
    this.fillShape = createCheckbox("Fill shape", false);
    this.fillShape.position(this.pos, 240);
    this.fillShape.style("color", "white");

    this.values = [];
  }

  getColors(stroke, fill) {
    this.strokeDropdown.getColor(stroke);
    this.fillDropdown.getColor(fill);
    return [
      this.strokeDropdown.color,
      this.fillDropdown.color,
    ];
  }

  // Return instance of dropdowns
  returnDropdowns() {
    let dropdowns = {
      shapeDropdown: this.shapeDropdown,
      strokeDropdown: this.strokedropdown,
      fillDropdown: this.filldropdown,
    };
    return dropdowns;
  }

  returnCheckboxes() {
    let checkBoxes = {
      addStroke: this.addStroke,
      fillShape: this.fillShape,
    };
    return checkBoxes;
  }
}
