export const BaseIcon = `
    type BaseIcon {
        categories: [ Category ]
    }

    type Category {
        icons: [ Icon ]
        name: String
    }

    type Icon {
        id: String
    }
`;

export const MDIIcon = `
    type MDIIcon {
        name: String 
    }
`;
