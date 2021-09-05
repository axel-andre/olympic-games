import 'package:flutter/material.dart';
import 'package:mobile/data/event.dart';

class EventDetails extends StatelessWidget {
  final Event event;

  EventDetails({Key? key, required this.event}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          // Here we take the value from the MyHomePage object that was created by
          // the App.build method, and use it to set our appbar title.
          title: Text("Détail de l'événement"),
        ),
        body: Center(
            child: Column(children: [
              SizedBox(height: 32),
              Text(event.name, style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
              SizedBox(height: 8),
              Text(event.sport.name, style: TextStyle(fontSize: 18, color: Colors.deepOrange)),
              SizedBox(height: 32),
              Text("Cet événement a lieu le ${event.day} à ${event.hours}", style: TextStyle(fontSize: 16)),
            ])));
  }
}
