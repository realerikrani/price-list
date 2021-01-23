package group

// Entity ...
type Entity struct {
	Title string `json:"title"`
	Info  string `json:"info"`
}

// Group ...
type Group struct {
	IDs      []string          `json:"ids"`
	Entities map[string]Entity `json:"entities"`
}

// Envelope ...
type Envelope struct {
	Groups Group `json:"groups"`
}
