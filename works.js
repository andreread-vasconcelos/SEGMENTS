const works = [
  {
    "title": "Infrastructural Threshold",
    "description": "A layered civic structure occupies the air above metropolitan movement, transforming a transport corridor into inhabitable territory.",
    "fragment": "The city begins where circulation learns to dwell.",
    "src": "assets/images/01-infrastructural-threshold.webp"
  },
  {
    "title": "Urban Viaduct",
    "description": "A continuous frame spans road and rail, joining circulation, occupation, and public life within one sectional datum.",
    "fragment": "A span becomes territory when movement acquires depth.",
    "src": "assets/images/02-urban-viaduct.webp"
  },
  {
    "title": "Transit Cathedral",
    "description": "Infrastructure acquires monumentality through a vaulted structural order where mobility becomes collective ritual.",
    "fragment": "Velocity seeks its own cathedral.",
    "src": "assets/images/03-transit-cathedral.webp"
  },
  {
    "title": "Sectional Metropolis",
    "description": "Program, circulation, and void are compressed into a dense vertical section that behaves as an urban organism.",
    "fragment": "The section is the city thinking vertically.",
    "src": "assets/images/04-sectional-metropolis.webp"
  },
  {
    "title": "Aerial Trajectory",
    "description": "Architecture organizes trajectories rather than parcels, making movement itself the primary generator of form.",
    "fragment": "Topology replaces geography; trajectory becomes place.",
    "src": "assets/images/05-aerial-trajectory.webp"
  },
  {
    "title": "Civic Machine",
    "description": "An exposed structural machine converts residual urban space into a legible civic interior.",
    "fragment": "The machine becomes civic when its structure is shared.",
    "src": "assets/images/06-civic-machine.webp"
  },
  {
    "title": "Speculative Horizon",
    "description": "A speculative horizon where structure, mobility, and inhabitation remain deliberately unresolved.",
    "fragment": "The future appears first as an unresolved edge.",
    "src": "assets/images/07-speculative-horizon.webp"
  },
  {
    "title": "Linear Habitat",
    "description": "A long inhabited beam proposes the city as a continuous interior suspended above existing systems.",
    "fragment": "Continuity is not repetition, but inhabitable duration.",
    "src": "assets/images/08-linear-habitat.webp"
  },
  {
    "title": "Metropolitan Span",
    "description": "Rail, road, and public occupation converge within a singular metropolitan cross-section.",
    "fragment": "Infrastructure becomes public when systems are allowed to meet.",
    "src": "assets/images/09-metropolitan-span.webp"
  },
  {
    "title": "The Civic Viaduct",
    "description": "A disciplined megastructure establishes a new urban layer while retaining the distant city as context.",
    "fragment": "The horizon is constructed before it is occupied.",
    "src": "assets/images/10-the-civic-viaduct.webp"
  },
  {
    "title": "Cathedral Infrastructure",
    "description": "The underside becomes an inhabited vault: engineering is recast as civic space.",
    "fragment": "The vault no longer shelters faith, but collective motion.",
    "src": "assets/images/11-cathedral-infrastructure.webp"
  },
  {
    "title": "Vertical Field",
    "description": "A rational frame receives multiple scales of occupation, turning the tower into a vertical territory.",
    "fragment": "Height is a social condition before it is a dimension.",
    "src": "assets/images/12-vertical-field.webp"
  },
  {
    "title": "Tectonic Tower",
    "description": "Structure and enclosure are separated so that load, circulation, and inhabitation remain visibly distinct.",
    "fragment": "Tectonics is truth made visible through load.",
    "src": "assets/images/13-tectonic-tower.webp"
  },
  {
    "title": "Fluid Monument",
    "description": "A fluid envelope negotiates with a rigorous internal armature, balancing deformation and order.",
    "fragment": "Form becomes free only when structure remains intelligible.",
    "src": "assets/images/14-fluid-monument.webp"
  },
  {
    "title": "Park as Counterform",
    "description": "Landscape acts as a restorative field around monumental architectural figures.",
    "fragment": "Ground is not background; it is the first architecture.",
    "src": "assets/images/15-park-as-counterform.webp"
  },
  {
    "title": "Residual Ground",
    "description": "Wasteland is treated as latent territory, awaiting another social and spatial purpose.",
    "fragment": "Waste is matter awaiting another ontology.",
    "src": "assets/images/16-residual-ground.webp"
  },
  {
    "title": "Urban Constellation",
    "description": "A family of urban objects is composed as a field of relationships rather than isolated icons.",
    "fragment": "The whole emerges through relations among fragments.",
    "src": "assets/images/17-urban-constellation.webp"
  },
  {
    "title": "Launch Territory",
    "description": "The launch complex is understood as territory: approach, service, spectatorship, and departure are one sequence.",
    "fragment": "Departure begins long before ignition.",
    "src": "assets/images/18-launch-territory.webp"
  },
  {
    "title": "Suspended Departure",
    "description": "The rocket is held away from the tower, making suspension and release the central architectural event.",
    "fragment": "Suspension is the instant when gravity becomes negotiable.",
    "src": "assets/images/19-suspended-departure.webp"
  },
  {
    "title": "Orbital Gantry",
    "description": "A civic-scale gantry frames ascent while exposing the mechanics that make departure possible.",
    "fragment": "The sublime is engineered through scale and anticipation.",
    "src": "assets/images/20-orbital-gantry.webp"
  },
  {
    "title": "Rocket and Frame",
    "description": "The vehicle inhabits the architecture temporarily; the structure exists to prepare its disappearance.",
    "fragment": "Architecture prepares the object for its own absence.",
    "src": "assets/images/21-rocket-and-frame.webp"
  },
  {
    "title": "Mechanical Threshold",
    "description": "Articulated arms transform support into choreography, staging the threshold between gravity and flight.",
    "fragment": "A joint becomes philosophy when it stages release.",
    "src": "assets/images/22-mechanical-threshold.webp"
  },
  {
    "title": "Spaceport Section",
    "description": "Section reveals the coexistence of service decks, circulation, observation, and propulsion infrastructure.",
    "fragment": "The section discloses what the image conceals.",
    "src": "assets/images/23-spaceport-section.webp"
  },
  {
    "title": "Launch Armature",
    "description": "The tower becomes an armature of forces rather than a conventional enclosure.",
    "fragment": "Force writes the first line of every architecture.",
    "src": "assets/images/24-launch-armature.webp"
  },
  {
    "title": "Departure Chamber",
    "description": "Interior space is organized around anticipation, with the rocket visible as a temporary monumental presence.",
    "fragment": "A portal is an interior organized around elsewhere.",
    "src": "assets/images/25-departure-chamber.webp"
  },
  {
    "title": "Aerospace Cloister",
    "description": "Aerospace infrastructure becomes cloister-like: repetitive structure frames contemplation before motion.",
    "fragment": "Repetition becomes contemplative at the edge of the machine.",
    "src": "assets/images/26-aerospace-cloister.webp"
  },
  {
    "title": "Vertical Portal",
    "description": "The launch tower operates as a portal whose scale is measured against both the body and the sky.",
    "fragment": "The gate measures the distance between earth and possibility.",
    "src": "assets/images/27-vertical-portal.webp"
  },
  {
    "title": "Launcher Study",
    "description": "A compact study of support, access, and release, stripped to its essential tectonic logic.",
    "fragment": "Precision is the poetry of necessary support.",
    "src": "assets/images/28-launcher-study.webp"
  },
  {
    "title": "Interior Horizon",
    "description": "An interior prospect turns the rocket into a distant horizon and architecture into an instrument of waiting.",
    "fragment": "To wait is already to travel.",
    "src": "assets/images/29-interior-horizon.webp"
  },
  {
    "title": "Ignition Hall",
    "description": "Artificial light, structural depth, and framed machinery create a civic interior for extreme departure.",
    "fragment": "Light gives the machine a civic interior.",
    "src": "assets/images/30-ignition-hall.webp"
  },
  {
    "title": "Departure",
    "description": "The final image places motion ahead of object: architecture remains as the vessel from which departure occurs.",
    "fragment": "Architecture remains; movement completes it.",
    "src": "assets/images/31-departure.webp"
  }
];
