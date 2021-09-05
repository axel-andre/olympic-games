import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile/data/event.dart';
import 'package:mobile/screens/event_details.dart';

class EventCard extends StatelessWidget {
  final Event event;
  EventCard({Key? key, required this.event}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Card(
            child: Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        ListTile(
          title: Text(event.name),
          subtitle: Text(event.sport.name),
          trailing: Text('Le ${event.day} à ${event.hours}'),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[
            TextButton(
              child: Text('Voir les détails'),
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context)=>EventDetails(
                  event: event,
                )));
              },
            ),
            const SizedBox(width: 8),
          ],
        ),
      ],
    )));
  }
}
