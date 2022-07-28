mp.observe_property('audio-device', 'string', function(_) {
    mp.set_property_bool('pause', true);
});