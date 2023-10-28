export interface User {
    _id:       string;
    name:      string;
    lastName:  string;
    email:     string;
    username:  string;
    avatar:    string;
    confirmed: boolean;
    banner:    string;
    about:     string;
    images:    Image[];
    socials:   Social[];
}

export interface Image {
    _id:       string;
    imageUrl:  string;
    caption:   string;
    createdAt: string;
}

export interface Social {
    _id:         string;
    type:        Type;
    url:         string;
    user:        string;
    description: string;
    createdAt:   string;
    updatedAt:   string;
    __v:         number;
}

export interface Type {
    _id:  string;
    name: string;
}
