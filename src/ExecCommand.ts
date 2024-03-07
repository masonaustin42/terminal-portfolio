const executeCommand = (command: string, assignUsername: Function) => {
  command = command.trim().toLowerCase();
  const args = command.split(" ");
  switch (args[0]) {
    case "":
      return "";
    case "help":
      switch (args[1]) {
        case "about":
          return "about: prints a short description about me";
        case "contact":
          return "contact: prints my contact information";
        case "projects":
          return "projects: prints a list of my projects";
        case "setusername":
          return "setusername [username]: sets a username for the terminal";
        case "visual":
          return "visual: opens a new tab with a more traditional visual portfolio";
        case "email":
        case "phone":
        case "github":
        case "linkedin":
          return `${args[1]}: opens a link to my ${args[1]}`;
        default:
          return `Enter help [command] for more information on a specific command
          Available commands: 
          about
          clear
          contact
          projects
          setusername
          visual`;
      }
    case "about":
      return "about";
    case "clear":
      return "";
    case "contact":
      return `contact-info`;
    case "setusername":
      if (args.length < 2)
        return "Err: No username provided. Usage: setusername [username]";
      assignUsername(args[1]);
      return `Username set to ${args[1]}`;
    case "github":
      window.open("https://www.github.com/masonaustin42", "_blank");
      return "opening GitHub profile...";
    case "linkedin":
      window.open(
        "https://www.linkedin.com/in/mason-austin-a1b568240/",
        "_blank"
      );
      return "opening LinkedIn profile...";
    case "email":
      window.open("mailto:masonaustin42@gmail.com", "_blank");
      return "opening email client...";
    case "phone":
      window.open("tel:360-328-4137", "_blank");
      return "opening phone app...";
    case "projects":
      return `Here are some projects I have worked on!
      Enter a project name for more information on a specific project
        - Filmmakr
        - SavoryScoot`;
    case "filmmakr":
      return "filmmakr";
    case "savoryscoot":
      return "savoryscoot";
    case "visual":
      window.open("https://masonaustin42.github.io/", "_blank");
      return "opening visual portfolio...";
    default:
      return "Command not found, please type 'help' for a list of available commands";
  }
};

export default executeCommand;
