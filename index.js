'use strict'
require('./style.scss')

const React = require('react')
const ReactDOM = require('react-dom')

const L = require('leaflet')

const left = 37
const up = 38
const right = 39
const down = 40

const Game = React.createClass({
  handleInput: function (e) {
    console.log(e)
    if (e.keyCode === left) {
      this.props.health -= 1
      console.log(this.props.health)
    }
  },
  render: function () {
    return (
      <div id="gameroot" onKeyPress={this.handleInput} onKeyDown={this.handleInput}>
        <Health health={this.props.health}/>
        <Map />
      </div>
    )
  }
})

const Health = React.createClass({
  render: function () {
    return (
      <div className="health"></div>
    )
  }
})

const Map = React.createClass({
  render: function() {
    return (
      <div id="map">
      </div>
    );
  },
  componentDidMount: function () {
    const options = {
      scrollWheelZoom: false,
      keyboard: false,
      doubleclickZoom: false,
      dragging: false,
      touchZoom: false,
      tap: false,
      zoomControl: false
    }
    this.mapElement = L.map('map', options).setView([39.274046, 26.612257], 17)
    this.mapElement.addLayer(L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }))

  }
})

let GameObject = {
  position: {
    lat: 39.274046,
    lng: 26.612257
  },
  health: 100
}

ReactDOM.render(
  <Game data='GameObject'/>,
  document.getElementById('content')
)
