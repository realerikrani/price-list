package product

// Entity ...
type Entity struct {
	Info      string `json:"info"`
	Price     string `json:"price"`
	ExtraInfo string `json:"extraInfo"`
	GroupID   string `json:"groupId"`
}

// Envelope ...
type Envelope struct {
	Products []Entity `json:"products"`
}
